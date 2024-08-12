import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-xl font-bold mb-2">About Us</h2>
            <p className="text-gray-400">
              We are a company dedicated to providing the best services and solutions. 
              Our mission is to help our clients achieve their goals through innovative approaches.
            </p>
          </div>
          <div className="mb-6 lg:mb-0">
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
              <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
              <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
            </ul>
          </div>
          <div className="mb-6 lg:mb-0">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p className="text-gray-400">1234 Street Name, City, State, 56789</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: contact@example.com</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                  <path d="M21 6.5a1.5 1.5 0 0 1-1.5 1.5H16v4h2.5a1.5 1.5 0 0 1 0 3H16v4h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5V16h-2v1.5a1.5 1.5 0 0 1-3 0V16H3a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5h14a1.5 1.5 0 0 1 1.5 1.5z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                  <path d="M22.23 5.926a8.21 8.21 0 0 1-2.362.65A4.098 4.098 0 0 0 21.623 4a8.228 8.228 0 0 1-2.606.996 4.107 4.107 0 0 0-7.016 3.75 11.64 11.64 0 0 1-8.455-4.29 4.091 4.091 0 0 0 1.27 5.468A4.092 4.092 0 0 1 .8 8.477v.051a4.106 4.106 0 0 0 3.292 4.023 4.113 4.113 0 0 1-1.802.068 4.107 4.107 0 0 0 3.839 2.855A8.228 8.228 0 0 1 .978 19.48a11.55 11.55 0 0 0 6.29 1.84c7.548 0 11.67-6.24 11.67-11.67l-.014-.533a8.367 8.367 0 0 0 2.055-2.131z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                  <path d="M4.2 4.2c0 0 1.4-2.4 5.4-2.4 4.2 0 5.4 2.4 5.4 2.4 0 0 1.2 2.4-5.4 2.4C5.4 6.6 4.2 4.2 4.2 4.2zM12 14.4c-3.4 0-4.8-2.8-4.8-4.8 0-2.8 1.6-4.8 4.8-4.8 3.4 0 4.8 2.8 4.8 4.8 0 2.8-1.6 4.8-4.8 4.8zm6.8 0c-1.6 0-2.8-1.2-2.8-2.8 0-1.6 1.2-2.8 2.8-2.8 1.6 0 2.8 1.2 2.8 2.8 0 1.6-1.2 2.8-2.8 2.8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
