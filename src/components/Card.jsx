import React from "react";

const Card = ({ image, title, description, isExpanded, onClick }) => {
  return (
    <div
      className={`relative bg-cover bg-center rounded-2xl shadow-lg transition-all duration-300 cursor-pointer mb-10 ${
        isExpanded ? "w-80" : "w-60"
      } h-96`}
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    >
      {/* Gradient Overlay */}
      <div className=" rounded-2xl absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>

      {/* Card Content */}
      <div
        className={`absolute bottom-5 left-5 text-white transition-all duration-300 ease-in-out ${
          isExpanded ? "w-full px-5" : "w-3/4 px-2"
        }`}
      >
        <h2 className="text-3xl font-bold pr-20">{title}</h2>
        <p className="text-sm mt-2">{description}</p>
        <button
          className={`mt-4 py-2 justify-start bg-white text-black rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 ease-in-out flex items-center relative ${
            isExpanded ? "w-3/4 px-6" : "px-4 w-40"
          }`}
        >
          <span className="text-sm font-medium">Explore Problem</span>
          <span
            className="absolute right-4 transform transition-transform duration-300 ${
           "
          >
            ➤
          </span>
        </button>
      </div>

      {/* Expand Icon */}
      <button
        className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full shadow-md transition-all duration-300 ${
          isExpanded
            ? "bg-yellow-500 text-black rotate-45"
            : "bg-white text-black"
        }`}
      >
        <span className="transform transition-transform duration-300">
          &#8599; {/* North East Arrow */}
        </span>
      </button>
    </div>
  );
};

export default Card;
