import Image from 'next/image';

interface CategoryCardProps {
  label: string;
  image: string;
  gradient: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ label, image, gradient }) => {
  return (
    <div className={`flex flex-col items-center justify-center w-36 h-36 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 ${gradient}`}>
      <div className="w-16 h-16 mb-8">
        <Image src={image} alt={label} width={64} height={64} className='shadow-inherit'/>
      </div>
      <p className="text-sm font-semibold text-gray-700">{label}</p>
    </div>
  );
};

export default CategoryCard;
