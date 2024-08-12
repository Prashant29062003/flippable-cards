import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-gray-800 text-white flex items-center justify-between p-4">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-10 w-auto" />
          <h1 className="text-xl font-bold ml-2">TapFlip</h1>
        </Link>
      </div>
      <button
        className="lg:hidden text-2xl focus:outline-none"
        onClick={toggleNav}
      >
        ☰
      </button>
      <nav className={`lg:flex ${isNavOpen ? 'block' : 'hidden'} lg:items-center lg:w-auto w-full`}>
        <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 lg:mt-0 mt-4">
          <li>
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-400">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
