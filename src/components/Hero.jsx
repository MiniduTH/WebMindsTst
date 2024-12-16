import React from "react";
import RoundImg from "./ROundImg";
import dessert from "../assets/dessert.jpg";
import glacier2 from "../assets/glacier2.jpg";
import forest from "../assets/forest.jpg";
import ocean from "../assets/ocean.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const btncls =
  "text-gray-600 hover:text-gray-800 bg-white rounded-full py-3 font-sans px-4 mx-0 shadow-sm shadow-slate-200";

  return (
    <section className="relative flex items-center justify-center h-screen bg-gray-50 text-center">
      {/* Floating Decorative Circles */}

      <RoundImg className=" top-1/3 left-32" url={dessert} />
      <RoundImg className=" top-1/3 right-32 " url={glacier2} />
      <RoundImg className=" bottom-64 left-56" url={forest} />
      <RoundImg className=" bottom-64 right-56 " url={ocean} />

      {/* Main Content */}
      <div className="px-4 items-center flex flex-col">
        <h1 className="text-4xl md:text-6xl font-medium text-gray-800 leading-tight  w-full">
          Let’s Make Our World
          <br />
          Cleaner & Greener!
        </h1>
        <p className="text-gray-600 mt-4 w-3/5 ">
          We work with partners & communities to ensure nature thrives and
          climate change is reversed.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className={btncls +" border border-gray-600"}>
            View Projects    
            <span className="pl-2">
            <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
          <button className={btncls}>
            Learn More 
            <span className="pl-2">
            <FontAwesomeIcon icon={faArrowRight} />
              </span>   
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
