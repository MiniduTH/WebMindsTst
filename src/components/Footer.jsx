import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  const btncls =
    "text-gray-600 hover:text-gray-800 rounded-full py-1 font-sans px-2 mx-0 shadow-sm shadow-slate-200 border border-slate-700";
  return (
    <div>
      <footer class="w-full">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between flex-col py-14 gap-14 lg:gap-20 min-[1124px]:flex-row">
            {/* subscribe btn */}
            <div class="flex w-1/2  xl:max-w-lg">
              <div class="relative lg:flex-row gap-3 flex-col flex items-center justify-between max-[1124px]:max-w-2xl max-[1124px]:mx-auto ">
                <input
                  type="text"
                  name="email"
                  class="py-3 px-5 h-14 pl-14 border border-gray-300 rounded-full text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none flex-1 w-full "
                  placeholder="Contact"
                />
                <button
                  type="submit"
                  class="h-14 py-3.5 px-7 bg-indigo-600 transition-all duration-500 shadow-md rounded-full text-white font-semibold hover:bg-indigo-700"
                >
                  Subscribe
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
              <div className="flex items-center bg-slate-100 rounded-full py-0 font-sans px-2 mx-0 ">
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
