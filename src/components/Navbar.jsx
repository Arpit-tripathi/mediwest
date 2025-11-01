

import React, { useState } from "react";
import logo from "../assets/QARA.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="fixed w-full z-20 bg-black bg-opacity-70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="logo" className="h-16 w-16 object-contain" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-blue-400 font-semibold">
          <li>
            <a
              href="#home"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Hamburger Button (Mobile Only) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-400 focus:outline-none z-30 relative"
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-black  transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 flex flex-col`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col items-center justify-center flex-grow space-y-8 text-blue-400 font-semibold text-lg">
          <li>
            <a
              href="#home"
              onClick={toggleMenu}
              className="hover:text-blue-300 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={toggleMenu}
              className="hover:text-blue-300 transition-colors duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="hover:text-blue-300 transition-colors duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
