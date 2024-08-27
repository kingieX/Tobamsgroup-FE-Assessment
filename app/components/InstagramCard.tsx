import Image from 'next/image';
import React from 'react';

interface InstagramCardProps {
  image: string;
}

const InstagramCard: React.FC<InstagramCardProps> = ({ image }) => {
  return (
    <div className="relative shadow-sm overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
      <Image src={image} alt="Instagram post"width={1000} height={1000} className="rounded-lg shadow-md" loading='lazy' />
    </div>
  );
};

export default InstagramCard;
