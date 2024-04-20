"use Client";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-10">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          CHEAP CAR RENTAL IN YOUR DESIRED DESTINATION
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          One of our top priorities is to adjust each package we offer to our
          customer’s exact needs. Rental Cars / Bike / Jeeps Starting @ $3 / Hrs
        </p>
        <div className="flex justify-center md:justify-start">
          {/* Getting Started Button with Icon */}
          <button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-2xl flex items-center mr-4">
            <span className="mr-2">Getting Started</span>
            <HiOutlineArrowRight className="text-lg" />
          </button>

          {/* Contact Button */}
          <button className="bg-blue-900 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-2xl">
            Contact
          </button>
        </div>
      </div>

      <div className="text-center md:text-right">
        <img
          src="/hero.png"
          alt="Hero Image"
          className="mx-auto md:mx-0 my-4 md:my-0"
          style={{
            maxWidth: "100%",
            maxHeight: "80vh",
            width: "auto",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
