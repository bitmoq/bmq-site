import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Looking for the right Salesforce / Full Stack Partner?
          </h1>
          <p className=" text-center md:text-left">
            We have assembled a team of experts in Salesforce and Full Stack Web
            Application Developement who are passionate about accelerating your
            business transformation to achieve higher operational efficiency and
            ROI.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#contactus"
              className="p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-red-400"
            >
              Talk to our Experts
            </a>
          </div>
        </div>
        <div className="hidden md:block w-1/2">
          <Image src="/img/6428197.jpg" alt="" width="700" height="700" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
