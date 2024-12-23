"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Image from "next/image";
import loginImage from "../../../public/images/auth/login/rpcLimoLogin.png";
import { loginFailure, loginSuccess } from "@/redux/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const validateForm = () => {
    if (!email || !password) {
      setError("Email and Password are required.");
      return false;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError(null);
    setSuccess(null); // Reset success message before making the request

    try {
      const response = await axios.post(
        "https://api.zsimarketing.com/api/auth/user/login",
        {
          email,
          password,
        }
      );
      console.log("Login Response:", response);

      // Handle success response
      if (response.status === 200 && !response.data.isError) {
        setSuccess("Login successful!");
        setTimeout(() => setSuccess(null), 4000); // Clear success message after 4 seconds

        const token = response.data.data.token;
        const user = response.data.data.user;
        dispatch(loginSuccess({ token, user }));

        localStorage.setItem("token", token);
        document.cookie = `token=${token}; max-age=${60 * 60 * 24 * 7}; path=/`;
      } else {
        // Handle error response
        setError(
          response.data.error.errMsg ||
            "Login failed. Please check your credentials."
        );
        dispatch(
          loginFailure(
            response.data.error.errMsg ||
              "Login failed. Please check your credentials."
          )
        );
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("An error occurred. Please try again.");
      dispatch(loginFailure("An error occurred. Please try again."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen lg:mt-0 mt-24 grid grid-cols-1 lg:grid-cols-5">
      <div className="relative col-span-1 lg:col-span-3 w-full h-full">
        <Image
          src={loginImage}
          alt="Login Background"
          className="h-full w-full"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute lg:top-44 left-20">
          <p className="text-5xl leading-[3.5rem] font-bold">
            Welcome to <br /> RPCLimo
          </p>
        </div>
      </div>

      <div className="col-span-2 flex lg:items-center justify-center bg-gray-100 p-6">
        <div className="max-w-sm w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}
            <div className="text-right mb-4">
              <a href="#" className="text-sm text-yellow-600 hover:underline">
                Forget password
              </a>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <div className="mt-4 text-sm text-gray-600">
            Need an account?{" "}
            <a href="#" className="text-yellow-600 hover:underline">
              Sign Up
            </a>{" "}
            |{" "}
            <a href="#" className="text-yellow-600 hover:underline">
              Privacy Policies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
