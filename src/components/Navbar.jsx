import React from "react";
import logo from "../assets/logo.png";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const btncls =
    "text-gray-600 hover:text-gray-800 bg-slate-100 rounded-full py-2 font-sans px-2 mx-0 shadow-sm shadow-slate-200";
  return (
    <div className="shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white ">
        <div className="flex justify-between items-center h-16">
          
          {/* Links */}
          <div className="hidden md:flex space-x-8 float-left">
            <a href="#" className={btncls}>
              Home
            </a>
            <a href="#" className={btncls}>
              Contribution
            </a>
            <a href="#" className={btncls}>
              Our Mission
            </a>
          </div>

          {/* Logo */}
          <div className="flex items-center bg-slate-100 rounded-full py-0 font-sans px-2 mx-0 ">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <span className="ml-2 font-bold text-lg">Atacama</span>
          </div>
{/* dropdowns */}
          <div className="hidden md:flex space-x-8 float-right">
            <Dropdown buttonLabel="Problems" className={btncls}/>
            <Dropdown buttonLabel="Products" />
            <a href="#" className={btncls + "shadow-md shadow-gray-400"}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
