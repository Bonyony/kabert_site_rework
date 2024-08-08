import React from "react";

import { useState } from "react";

const Menu = () => {
  return (
    <ul className="flex flex-row items-center gap-14 p-2  ">
      <li>
        <a
          className={
            "p-1 transition-all duration-100 rounded-lg " +
            "bg-white bg-opacity-80 hover:bg-emerald-400"
          }
          href="#home"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className={
            " p-1 transition-all duration-100 rounded-lg rounded-lg " +
            "bg-white bg-opacity-80 hover:bg-emerald-400"
          }
          href="#projects"
        >
          Products
        </a>
      </li>

      <li>
        <a
          className={
            " p-1 transition-all duration-100 rounded-lg " +
            "bg-white bg-opacity-80 hover:bg-emerald-400"
          }
          href="#contact"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

const SmallMenu = () => {
  return (
    <ul className="flex flex-col items-end gap-5 mt-5   ">
      <li>
        <a
          className={
            "p-1 transition-all duration-100 rounded-lg " +
            "bg-white bg-opacity-80 hover:bg-emerald-400"
          }
          href="#home"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className={
            "p-1 transition-all duration-100 rounded-lg " +
            "bg-white bg-opacity-80 hover:bg-emerald-400"
          }
          href="#projects"
        >
          Products
        </a>
      </li>

      <li>
        <a
          className={
            "p-1 transition-all duration-100 rounded-lg " +
            "bg-white bg-opacity-80 hover:bg-emerald-400"
          }
          href="#contact"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div
      className={`z-10 fixed top-0 w-full ${
        navbar && window.innerWidth < 768
          ? "bg-slate-200 bg-opacity-80"
          : "bg-transparent"
      } `}
    >
      <div className=" flex flex-row justify-between pt-5 px-5 font-semibold text-lg">
        <h1 className="text-2xl ml-1 mt-3 bg-gradient-to-r from-emerald-700 to-slate-700 text-transparent bg-clip-text">
          Kabert Industries
        </h1>
        <div className="md:hidden">
          <button
            className="p-2 rounded-md outline-none flex items-end"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <div className="flex flex-col items-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={
                    "w-10 h-10 rounded-lg transition-all duration-100 " +
                    "bg-white hover:bg-red-300"
                  }
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>

                <SmallMenu />
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={
                  "w-10 h-10 rounded-lg bg-opacity-55  transition-all duration-100 " +
                  "bg-white hover:bg-emerald-400"
                }
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden md:block">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
