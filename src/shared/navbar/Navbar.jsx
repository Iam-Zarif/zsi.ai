"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router  = useRouter();
  return (
    <div className="w-full fixed top-0 py-3 px-4 flex items-center bg-yellow-600 justify-between shadow-md z-50">
      <div className="2xl:max-w-[1350px] w-full mx-auto  flex justify-between items-center gap-20">
      
  

        <nav className="flex gap-6 font-semibold uppercase text-sm items-center">
          <Image
          onClick={() => router.push("/")}
            src="https://book.rpclimo.com/images/logo.png"
            loading="lazy"
            className="w-40 cursor-pointer"
            alt="logo"
            width={50}
            height={50}
          />
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

        <div className="flex items-center gap-4">
          <a href="tel:+1234567890" className="font-semibold">+1 234 567 890</a>

          <Link
            href="/book-now"
            className=" border-black border-2 px-4 py-2 rounded-md   transition"
          >
            Book Now
          </Link>

          <Link
            href="/login"
            className="bg-white border-black border  px-4 py-2 rounded-md  transition"
          >
            Account Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
