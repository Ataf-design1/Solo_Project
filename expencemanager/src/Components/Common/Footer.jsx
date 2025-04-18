import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-100 text-gray-600 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Expense Tracker. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
