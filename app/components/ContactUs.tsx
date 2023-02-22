import React, { useState } from "react";

function ContactUs() {
  return (
    <section id="contactus">
      <div className="container items-center px-6 py-10 mx-auto mt-10 space-y-0 md:space-y-0">
        <h1 className="text-4xl font-bold text-center md:text-5xl uppercase">
          Contact Us
        </h1>
        <div className="flex flex-col items-center space-y-10">
          <div className="text-xl text-center mt-4">
            Every possibility starts with a conversation. Let's engage.
          </div>
          <form
            action="https://formspree.io/f/meqwgkwr"
            method="POST"
            className="container mx-auto space-y-5 flex flex-col"
          >
            <label>
              Name <span className="text-red-500">*</span>
              <input
                type="text"
                name="name"
                required
                className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm `}
              />
            </label>
            <label>
              Email <span className="text-red-500">*</span>
              <input
                type="email"
                name="email"
                required
                className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm `}
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
              />
            </label>
            <label>
              Phone <span className="text-red-500">*</span>
              <input
                type="tel"
                name="phone"
                required
                className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm `}
                pattern="^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
              />
            </label>
            <label>
              Company <span className="text-gray-500 text-sm">(optional)</span>
              <input
                type="text"
                name="company"
                className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm `}
              />
            </label>
            <label>
              I am interested in discussing about{" "}
              <span className="text-red-500">*</span>
              <textarea
                name="message"
                maxLength={500}
                className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm h-32`}
                required
              ></textarea>
            </label>
            <button
              type="submit"
              className="p-3 px-6 pt-2 text-white w-40 bg-blue-500 rounded-full baseline hover:bg-blue-400 md:block"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
