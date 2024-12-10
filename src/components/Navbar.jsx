import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white" >
        <div className="flex justify-between items-center h-16">

          {/* Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 bg-slate-100 rounded-full py-2 font-sans px-2 mx-0">
              Contribution
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Our Mission
            </a>
          </div>
            
          {/* Logo */}
          <div className="flex items-center bg-slate-100 rounded-full py-0 font-sans px-2 mx-0">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto"
            />
            <span className="ml-2 font-bold text-lg">Atacama</span>
          </div>


          {/* Dropdowns */}
          <div className="hidden md:flex space-x-4">
            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-800 flex items-center">
                Problems <span className="ml-1">&#x25BC;</span>
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg p-4 mt-2">
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                  Problem 1
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                  Problem 2
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-800 flex items-center">
                Projects <span className="ml-1">&#x25BC;</span>
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg p-4 mt-2">
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                  Project 1
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                  Project 2
                </a>
              </div>
            </div>
          </div>

          {/* Contact Us Button */}
          <div>
            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
