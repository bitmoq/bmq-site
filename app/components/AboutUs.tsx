import React from "react";

function AboutUs() {
  return (
    <section id="aboutus" className="bg-red-200">
      <div className="container py-20 px-6 mx-auto mt-10">
        <div className="flex flex-col items-center space-y-12">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-center">
            Who are we?
          </h1>
          <div className="space-y-12 text-center">
            <p>
              Bitmoq Technologies is a technology company that specializes in
              building Salesforce & Full Stack Web Application Development
              services for you. We also have a suite of products that solve key
              business pain points for B2B and B2C segments. We have been
              prominent in the Salesforce and Web Development space since as
              early as 2010 and have executed 140+ projects over the last 12
              years of varying complexity across multiple domains.
            </p>
          </div>
          <div>
            <div className="max-w-md text-xl font-bold text-center md:text-center">
              Our Core Values
            </div>
            <div className="flex flex-col justify-between mt-6 gap-3 text-center md:flex-row ">
              <div className="text-white p-4 rounded bg-red-600 font-bold">
                Trust
              </div>
              <div className="text-white p-4 rounded bg-red-600 font-bold">
                Customer Success
              </div>
              <div className="text-white p-4 rounded bg-red-600 font-bold">
                Equality
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
