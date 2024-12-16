import React from "react";
import RoundImg from "./ROundImg";
import dessert from "../assets/dessert.jpg";
import glacier2 from "../assets/glacier2.jpg";
import forest from "../assets/forest.jpg";
import ocean from "../assets/ocean.avif";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gray-50 text-center">
      {/* Floating Decorative Circles */}

      <RoundImg className=" top-1/3 left-32" url={dessert} />
      <RoundImg className=" top-1/3 right-32 " url={glacier2} />
      <RoundImg className=" bottom-64 left-56" url={forest} />
      <RoundImg className=" bottom-64 right-56 " url={ocean} />

      {/* Main Content */}
      <div className="px-4 items-center flex flex-col">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight  w-full">
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
          <button className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700">
            View Projects →
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
            Learn More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
