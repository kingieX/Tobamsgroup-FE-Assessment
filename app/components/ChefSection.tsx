// app/components/ChefSection.tsx
import Image from 'next/image';
import React from 'react';

const ChefSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-8">
      <div className="w-1/2">
        <h2 className="text-4xl max-w-md font-medium leading-tight mb-8">Everyone can be a <br /> chef in their own kitchen</h2>
        <p className="text-gray-600 max-w-lg mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim.
        </p>
        <button className="bg-black text-white px-8 py-3 text-sm rounded-xl hover:bg-gray-800 transition-colors duration-300">
          Learn More
        </button>
      </div>
      <div className="w-1/2 mt-6 md:mt-0 flex justify-center">
        <Image src="/chef.png" alt="Chef" width={1000} height={1000} className="w-full rounded-lg" />
      </div>
    </div>
  );
};

export default ChefSection;
