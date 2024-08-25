import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="text-2xl font-bold">
          <Link href="/">
            <p>Foodieland.</p>
          </Link>
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link href="/">
              <p className="hover:text-gray-700">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/recipes">
              <p className="hover:text-gray-700">Recipes</p>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <p className="hover:text-gray-700">Blog</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="hover:text-gray-700">Contact</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="hover:text-gray-700">About us</p>
            </Link>
          </li>
        </ul>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-700">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-700">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-700">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
