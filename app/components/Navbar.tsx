import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-8 px-12">
        <div className="text-2xl font-bold">
          <Link href="/">
            {/* <p>Foodieland.</p> */}
            <Image src='./Foodieland.svg' alt='Foodieland logo' width={40} height={40} className='w-32' />
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
        <div className="flex space-x-6">
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
    </nav>
  );
};

export default Navbar;
