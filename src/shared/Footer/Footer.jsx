"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import facebook from "../../../public/images/footer/facebook.png";
import insta from "../../../public/images/footer/insta.png";
import twitter from "../../../public/images/footer/twitter.png";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="">
      <footer className="bg-yellow-600 font-sans  text-black mt-32 pt-10 pb-5">
        <div className="2xl:max-w-[1350px] w-full mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:mt-12 gap-8">
          <div className="flex flex-col gap-6 mx-auto lg:col-span-2">
            <Image
              onClick={() => router.push("/")}
              src="https://book.rpclimo.com/images/logo.png"
              loading="lazy"
              className="cursor-pointer w-52"
              alt="RPCLimo Logo"
              width={150}
              height={50}
            />
            <p className="text-lg mt-6 leading-9">
              Spanning from the bustling energy of New York to over 300 cities
              worldwide, RPC Limo is your trusted partner in sophisticated
              travel logistics. We pledge to provide a smooth transition from
              the outset of your journey to its conclusion, ensuring every leg
              of your trip is executed with precision and elegance.
            </p>
          </div>
          <div className="flex flex-col gap-6 mx-auto">
            <h3 className="text-xl">QUICK LINKS</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-300"
                >
                  Our Fleet
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-300"
                >
                  Our Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-300"
                >
                  Book A Ride
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 mx-auto">
            <h3 className="text-xl">OUR SERVICES</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-300"
                >
                  Corporate Travel
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-300"
                >
                  Airport Transfer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-300"
                >
                  Wedding Transfer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-300"
                >
                  Charter Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-300"
                >
                  Cruise Port Transfer
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 mx-auto text-lg leading-9">
            <div className="flex gap-4">
              <Image
                src="https://rpclimo.com/wp-content/uploads/2017/11/app_logo.png"
                alt="google play"
                className="w-52"
                loading="lazy"
                width={150}
                height={50}
              />
            </div>
            <p className="leading-relaxed">
              If you are a rider or want to use our platform to ride, please
              download the RPC LIMO app.
            </p>
            <p className="leading-relaxed">
              If you are a driver or want to drive with us, please download the
              RPC DRIVER app.
            </p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-yellow-500 mt-8"></div>
        <div className="2xl:max-w-[1350px] w-full mx-auto px-6 mt-4 flex justify-between items-center">
          <p className="text-black text-sm">
            Copyright © RPC Limo 2024 - Developed by ZSI.
          </p>
          <div className="flex gap-4 items-center">
            <Link href="#" className="hover:opacity-80">
              <Image
                src={facebook}
                alt="Facebook"
                width={24}
                height={24}
                className="w-5"
              />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Image
                src={twitter}
                alt="Twitter"
                width={24}
                height={24}
                className="w-5"
              />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Image
                src={insta}
                alt="Instagram"
                width={24}
                height={24}
                className="w-6"
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
