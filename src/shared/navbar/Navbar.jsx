"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="w-full fixed top-0 py-3 px-4 bg-yellow-600 shadow-md z-50">
      <div className="2xl:max-w-[1350px] w-full mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            onClick={() => router.push("/")}
            src="https://book.rpclimo.com/images/logo.png"
            loading="lazy"
            className="w-40 cursor-pointer"
            alt="logo"
            width={50}
            height={50}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 font-semibold uppercase text-sm items-center">
          <Link href="/" className="hover:text-yellow-50">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-50">
            About
          </Link>
          <Link href="/service" className="hover:text-yellow-50">
            Service
          </Link>
          <Link href="/fleet" className="hover:text-yellow-50">
            Fleet
          </Link>
          <Link href="/quote" className="hover:text-yellow-50">
            Get a Quote
          </Link>
          <Link href="/contact" className="hover:text-yellow-50">
            Contact Us
          </Link>
          <Link href="/driver-login" className="hover:text-yellow-50">
            Driver Login
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+1234567890" className="font-semibold">
            +1 234 567 890
          </a>

          <Link
            href="/book-now"
            className="border-black border-2 px-4 py-2 rounded-md transition"
          >
            Book Now
          </Link>

          <Link
            href="/login"
            className="bg-white border-black border px-4 py-2 rounded-md transition"
          >
            Account Login
          </Link>
        </div>

        {/* Hamburger Menu for Small Devices */}
        <div className="md:hidden flex items-center">
          <button
            className="text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12" // Cross icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden mt-3 bg-yellow-500 h-[80vh] overflow-hidden shadow-md rounded-md p-4">
          <ul className="flex flex-col gap-4 font-semibold uppercase text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-50"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
          </li>
            <li>
              <Link
                href="/about"
                className="hover:text-yellow-50"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className="hover:text-yellow-50"
                onClick={() => setMenuOpen(false)}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                href="/fleet"
                className="hover:text-yellow-50"
                onClick={() => setMenuOpen(false)}
              >
                Fleet
              </Link>
            </li>
            <li>
              <Link
                href="/quote"
                className="hover:text-yellow-50"
                onClick={() => setMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-50"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/driver-login"
                className="hover:text-yellow-50"
                onClick={() => setMenuOpen(false)}
              >
                Driver Login
              </Link>
            </li>
            <li>
              <a href="tel:+1234567890" className="font-semibold">
                +1 234 567 890
              </a>
            </li>
            <li className="mt-2">
              <Link
                href="/book-now"
                className="border-black border-2 px-4 py-2  lg:mt-0 rounded-md transition"
                onClick={() => setMenuOpen(false)}
              >
                Book Now
              </Link>
            </li>
            <li className="mt-4">
              <Link
                href="/login"
                className="bg-white border-black border px-4 py-2  lg:mt-0 rounded-md transition"
                onClick={() => setMenuOpen(false)}
              >
                Account Login
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
