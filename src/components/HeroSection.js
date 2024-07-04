import React from "react";
import "../cssfile/hero.css";
import suitBg from "../assets/suitcase 1.png";
import placeHolder from "../assets/placeholder 1.png";

function HeroSection() {
  return (
    <div className="hero-bg w-full h-full object-cover opacity-100 text-white">
      <div className="flex flex-col justify-center items-center h-screen text-center px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
          Are you Suppliers?
        </div>
        <br />
        <div className="font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-8">
          Explore Matching Opportunities.
        </div>
        <div className="mt-5 flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
          <div className="flex justify-start items-center bg-white p-2 w-full sm:w-1/2 rounded-md gap-2">
            <img src={suitBg} alt="/" className="w-6 h-6 sm:w-8 sm:h-8" />
            <input
              type="search"
              placeholder="Search your required service here"
              className="flex-1 outline-none"
            />
          </div>
          <div className="flex justify-start items-center bg-white p-2 w-full sm:w-1/2 rounded-md gap-2 mt-4 sm:mt-0">
            <img src={placeHolder} alt="/" className="w-6 h-6 sm:w-8 sm:h-8" />
            <input
              type="search"
              placeholder="Search your desired location here"
              className="flex-1 outline-none"
            />
          </div>
          <div className="w-full sm:w-24 bg-green-500 p-2 rounded-md mt-4 sm:mt-0">
            <button className="w-full">Search</button>
          </div>
        </div>
        <div className="mt-5 text-center">
          <span className="text-xl sm:text-2xl">Are you a buyer?</span>
          <span className="underline text-lg sm:text-xl ml-2">
            Click here if you are looking to post a requirement
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
