import Image from "next/image";
import React from "react";

function Services() {
  return (
    <section id="services">
      <div className="container flex flex-col-reverse items-center px-6 py-14 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row-reverse justify-between">
        <div className="flex flex-col items-center space-y-12 md:w-1/2 md:items-end">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl">
            Our Services
          </h1>
          <div className="max-w-md text-center md:text-right space-y-1 font-bold">
            <p>Salesforce Implementation & Customization</p>
            <p>Salesforce Architecture & Consulting</p>
            <p>Salesforce Integrations</p>
            <p>Web Application Development (REACT and NEXTJS)</p>
            <p>Full Stack Web Development (MERN Stack)</p>
          </div>
          <div className="text-center md:text-right">
            To know more about our capabilities, please email us at{" "}
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_SALES_EMAIL}`}
              className="font-bold underline text-blue-600"
            >
              {process.env.NEXT_PUBLIC_SALES_EMAIL}
            </a>
          </div>
        </div>
        <div className="hidden md:block w-1/2">
          <Image src="/img/6101073.jpg" alt="" width="700" height="700" />
        </div>
      </div>
    </section>
  );
}

export default Services;
