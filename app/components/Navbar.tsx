"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full fixed  bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between lg:py-8 py-4 px-12">
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image
              src="./Foodieland.svg"
              alt="Foodieland logo"
              width={40}
              height={40}
              className="lg:w-32 w-24"
            />
          </Link>
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
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
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-700">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-700">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-700">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute w-full md:hidden bg-white shadow-md p-4 z-10 border-t">
          <ul className="flex flex-col items-center space-y-4">
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
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-gray-700">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-700">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-700">
              <FaInstagram />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
