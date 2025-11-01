import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8 border-t border-blue-500/20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-semibold text-blue-400">
            QARA Healthcare
          </h3>
          <p className="text-sm text-gray-400">
            Excellence in Healthcare Accreditation
          </p>
        </div>

        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <FaFacebook size={22} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <FaInstagram size={22} />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} QARA Healthcare. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
