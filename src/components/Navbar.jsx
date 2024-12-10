import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.svg" // Replace with your logo
              alt="Logo"
              className="h-8 w-auto"
            />
            <span className="ml-2 font-bold text-lg">Atacama</span>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Contribution
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Our Mission
            </a>
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
