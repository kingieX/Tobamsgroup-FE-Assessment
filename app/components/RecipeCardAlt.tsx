"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';

interface RecipeCardProps {
  type: string;
  title: string;
  description?: string;
  image: string;
  time?: string;
  label?: string;
  icon?: string;
  badge?: string;
  isLiked?: boolean;
  link?: string;
}

const RecipeCardAlt: React.FC<RecipeCardProps> = ({
  type,
  title,
  description,
  image,
  time,
  label,
  icon,
  badge,
  isLiked: initialIsLiked = false, // Set initial liked state
  link
}) => {
  const [isLiked, setIsLiked] = useState(initialIsLiked);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="relative rounded-xl bg-[] shadow-sm overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
      {/* Like/Unlike Icon */}
      <div className="absolute top-4 right-4 z-10 cursor-pointer p-2 bg-white rounded-full" onClick={toggleLike}>
        {isLiked ? (
          <FaHeart className="text-red-500" size={16} /> // Liked icon (red heart)
        ) : (
          <FaHeart className="text-gray-400" size={16} /> // Not liked icon (grey heart)
        )}
      </div>

      {/* Recipe Image */}
      <div className="w-full h-48 relative">
        <Image src={image} alt={title} layout="fill" loading='lazy' />
      </div>

      {/* Recipe Details */}
      <div className="py-4">
        <h3 className="text-md font-semibold text-gray-900">{title}</h3>
        {/* <p className="text-sm text-gray-600 mt-1">{description}</p> */}

        {/* Time and Label */}
        <div className="flex items-center mt-4 space-x-3">
          <div className="flex items-center space-x-2">
            <Image src="Timer.svg" alt='Timer' width={16} height={16} loading='lazy' />
            <span className="text-sm text-gray-600">{time}</span>
          </div>
          <div className='flex items-center space-x-2'>
            <Image src="ForkKnife.svg" alt='ForkKnife' width={16} height={16} loading='lazy' />
            <span className="text-sm font-medium text-gray-600">{label}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCardAlt;
