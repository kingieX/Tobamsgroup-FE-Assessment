// app/components/ChefSection.tsx
import Image from 'next/image';
import React from 'react';

const ChefSection: React.FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:p-8 p-4 gap-4">
      <div className="lg:w-1/2 lg:block flex flex-col justify-center">
        <h2 className="lg:text-4xl text-2xl lg:text-left text-center max-w-md font-medium leading-tight lg:mb-8 mb-4">Everyone can be a <br /> chef in their own kitchen</h2>
        <p className="text-gray-600 lg:text-left text-center lg:max-w-lg lg:mb-12 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim.
        </p>
        <button className="bg-black text-white px-8 py-3 text-sm rounded-xl hover:bg-gray-800 transition-colors duration-300">
          Learn More
        </button>
      </div>
      <div className="lg:w-1/2 mt-6 md:mt-0 flex justify-center">
        <Image src="/chef.png" alt="Chef" width={1000} height={1000} className="w-full rounded-lg" />
      </div>
    </div>
  );
};

export default ChefSection;
