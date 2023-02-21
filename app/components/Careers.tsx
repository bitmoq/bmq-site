import React from "react";

function Careers() {
  return (
    <section id="careers" className="bg-red-200">
      <div className="container items-center px-6 py-10 mx-auto mt-10 space-y-0 md:space-y-0">
        <div className="flex flex-col items-center space-y-10">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl">
            Careers
          </h1>
          <div className="text-center">
            If you are in the Salesforce, Mulesoft, MERN Stack and interested in
            joining our small but powerful team, drop us a note at{" "}
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_CAREER_EMAIL}`}
              className="font-bold underline text-blue-600"
            >
              {process.env.NEXT_PUBLIC_CAREER_EMAIL}
            </a>{" "}
            and we will take it forward from there!
          </div>
        </div>
      </div>
    </section>
  );
}

export default Careers;
