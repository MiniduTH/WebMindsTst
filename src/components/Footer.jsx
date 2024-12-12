import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  const btncls =
    "text-gray-600 hover:text-gray-800 rounded-full py-2 font-sans px-3 mx-0 shadow-sm shadow-slate-200 border border-gray-300 bg-white";
  return (
    <div className="py-0 border-t border-gray-200">
     
      <footer class="w-full bg-slate-50">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between flex-col py-14 gap-14 lg:gap-20 min-[1124px]:flex-row">
            {/* left */}
            <div className="w-2/5 ">
              <a href="#" className={btncls + " font-semibold"}>
                newsletter
              </a>
            </div>
            {/* right */}
            {/* subscribe */}
            <div class="flex w-3/5 flex-col">
              {/* txt */}
              <div className="flex-1">
                <h2 class="text-2xl font-semibold text-gray-900">
                  Subscribe to our newsletter to get the latest updates on
                  missions projects & initiatives.
                </h2>
              </div>
              <div class="pt-3 gap-3 flex-row flex items-center flex-1 ">
                <input
                  type="text"
                  name="email"
                  className="py-3 px-5 pl-5 border border-gray-300 rounded-full text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none flex-1 w-1/2 "
                  placeholder="Email address"
                />
                <button
                  type="submit"
                  className="py-3 px-5 bg-white transition-all duration-500 shadow-md rounded-full text-black font-semibold "
                >
                  Subscribe →
                </button>
              </div>
            </div>
          </div>
          <div class="py-2 border-t border-gray-200">
            <div class="flex items-center justify-center flex-col gap-8 lg:gap-0 sm:flex-row sm:justify-between">
              <span class="text-sm text-gray-500 ">
                ©2023,All rights reserved
              </span>

              {/* Logo */}
              <div className="flex items-center bg-white rounded-full py-0 font-sans px-2 mx-0 ">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
                <span className="ml-2 font-bold text-lg">Atacama</span>
              </div>

              {/* btns */}
              <div className="flex gap-0">
                <a href="#" className={btncls}>
                  Facebook
                </a>
                <a href="#" className={btncls}>
                  Twitter
                </a>
                <a href="#" className={btncls}>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
