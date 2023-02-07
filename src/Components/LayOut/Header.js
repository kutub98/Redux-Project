import { Link } from "react-router-dom";
import React from "react";
import { FaShoppingCart, FaClipboardList } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <header className="p-4 bg-gray-100 text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">
          <Link to="/home" aria-label="Back to homepage" className="flex items-center p-2">
            ReduxProject
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link to="/home" aria-label="Back to homepage" className="flex items-center p-2">
                Home
              </Link>
            </li>
            <li className="flex">
              <Link to="/topRated" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
                Top Rated
              </Link>
            </li>
            <li className="flex">
              <Link to="/about" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
                About
              </Link>
            </li>
            <li className="flex">
              <Link to="shop" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
                <FaShoppingCart />
              </Link>
            </li>
            <li className="flex">
              <Link to="selected" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
                <FaClipboardList />
              </Link>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-8 py-3 rounded">Login</button>
            <Link to="/register" className="self-center px-8 py-3 font-semibold rounded bg-pink-600 text-gray-50">
              Register
            </Link>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
