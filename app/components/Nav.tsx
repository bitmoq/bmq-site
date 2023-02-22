import Image from "next/image";
import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <a href="/#top">
            <Image
              src="/img/bitmoq-main.png"
              alt=""
              width={250}
              height={250}
              title={process.env.NEXT_PUBLIC_SITE_TAGLINE}
            />
          </a>
        </div>
        <div className="hidden space-x-6 md:flex">
          <a href="/#top" className="hover:text-gray-500">
            Home
          </a>
          <a href="/#aboutus" className="hover:text-gray-500">
            About
          </a>
          <a href="/#services" className="hover:text-gray-500">
            Services
          </a>
          <a href="/#careers" className="hover:text-gray-500">
            Careers
          </a>
          <Link href="/blogs" className="hover:text-gray-500">
            Blog
          </Link>
        </div>
        <a
          href="/#contactus"
          className="hidden p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-red-400 md:block"
        >
          Contact Us
        </a>
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-lg"
        >
          <a href="/#top">Home</a>
          <a href="/#aboutus">About</a>
          <a href="/#services">Services</a>
          <a href="/#careers">Careers</a>
          <a href="/#contactus">Contact Us</a>
          <Link href="/blogs">Blog</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
