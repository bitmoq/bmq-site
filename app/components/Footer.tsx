import Image from "next/image";
import React from "react";
import Locations from "./Locations";
import Social from "./Social";

function Footer() {
  return (
    <footer id="footer" className="bg-gray-400 bottom-0">
      <div className="container py-10 mx-auto h-full">
        <div className="flex flex-col space-y-6 justify-around md:flex-row md:items-center space-x-6">
          <div>
            <Image
              src="/img/bitmoq-main2.png"
              alt=""
              width="250"
              height="250"
            />
            <p className="max-w-sm px-6">
              ©{new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_NAME}.
              All rights reserved.
            </p>
          </div>
          <Social />
          <Locations />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
