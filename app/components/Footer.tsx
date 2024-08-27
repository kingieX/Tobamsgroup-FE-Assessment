import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="py-4 lg:px-12 px-4">
        <div className="flex flex-col gap-8 py-8 px-8">
          <Image src='./Foodieland.svg' alt='Foodieland logo' width={40} height={40} className='w-32' />
          <div className="flex lg:flex-row flex-col justify-between gap-4">
            <p className="text-sm lg:text-left text-center text-gray-500">Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
            <ul className="flex lg:space-x-10 space-x-4 text-sm">
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
          </div>
        </div>
        <div className="container flex lg:flex-row flex-col-reverse justify-between items-center gap-4 mx-auto px-4 py-8 text-center border-t-2 border-gray-100">
          <div></div>
          <p className="text-sm text-gray-500">
          © 2020 Flowbase. Powered by <span className="text-red-500 cursor-pointer hover:underline">Webflow</span>
          </p>
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
      </footer>
    );
  };
  
  export default Footer;
  