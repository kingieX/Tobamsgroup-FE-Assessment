import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex lg:flex-row flex-col-reverse relative w-full max-w-6xl h-full bg-[#E7FAFE] lg:rounded-[35px] rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
        
        {/* Left Half */}
        <div className="lg:w-1/2 w-full h-full lg:px-12 px-6 lg:py-12 py-6 bg-[#E7FAFE] flex flex-col justify-between">
            <div className='flex lg:items-start items-center flex-col gap-3 lg:mb-12 mb-6'>
                {/* Top Label */}
                <div className="w-max bg-white font-semibold px-3 py-2 rounded-full inline-flex items-center shadow-md">
                    <Image src="/hot-recipe.svg" alt='Hot recipe' width={16} height={16} loading='lazy' className="mr-2"/> 
                    <p className='text-sm'>Hot Recipes</p>
                </div>

                {/* Title */}
                <h2 className="lg:text-5xl text-3xl lg:text-left text-center max-w-sm font-medium leading-tight text-gray-900 lg:mt-4 mt-2">
                    Spicy delicious chicken wings
                </h2>

                {/* Description */}
                <p className="lg:max-w-md text-sm lg:text-left text-center text-gray-600 lg:mt-2 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* Icons and Labels */}
                <div className="flex lg:justify-start justify-center items-center space-x-4 mt-4">
                    <div className="bg-slate-200 py-2 px-3 rounded-full flex items-center space-x-2 text-gray-600">
                        <Image src="Timer.svg" alt='Timer' width={16} height={16} loading='lazy' />
                        <span className='text-sm'>30 Minutes</span>
                    </div>
                    <div className="bg-slate-200 py-2 px-3 rounded-full flex items-center space-x-2 text-gray-600">
                        <Image src="ForkKnife.svg" alt='ForkKnife' width={16} height={16} loading='lazy' />
                        <span className='text-sm'>Chicken</span>
                    </div>
                </div>
            </div>

            <div className='flex lg:flex-row flex-col justify-between items-center gap-4'>
                {/* Author Info */}
                <div className="flex items-center">
                    <Image
                    src="/avatar.png"
                    alt="John Smith"
                    width={40}
                    height={40}
                    className="rounded-full bg-slate-300"
                    loading='lazy'
                    />
                    <div className="ml-3">
                    <p className="text-gray-800 font-medium">John Smith</p>
                    <p className="text-gray-500 text-sm">15 March 2022</p>
                    </div>
                </div>

                {/* Button */}
                <button className="flex justify-center items-center gap-2 my-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all">
                    <span className='text-sm'>View Recipes</span>
                    <Image src="/play.svg" alt='play' width={16} height={16} loading='lazy' />
                </button>
            </div>
        </div>

        {/* Right Half */}
        <div className="lg:w-1/2 w-full h-full">
          <Image
            src="/hero.png"
            alt="Chicken Wings"
            width={500}
            height={500}
            // layout="fill"
            objectFit="cover"
            className="w-full"
            loading='lazy'
          />
        </div>

        {/* Middle Absolute Positioned Image */}
        <div className="absolute lg:top-1/4 lg:left-1/2 top-80 left-12 ml-6 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            src="/Badge.png"
            alt="Handpicked Badge"
            width={100}
            height={100}
            className="rounded-full w-12 lg:w-24"
            loading='lazy'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
