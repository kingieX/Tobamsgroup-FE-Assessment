// app/page.tsx
import React from 'react';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';

// Categories data
const categories = [
  { id: 1, label: "Breakfast", image: "/category/category1.png", gradient: "bg-gradient-to-b from-white to-green-100" },
  { id: 2, label: "Vegan", image: "/category/category2.png", gradient: "bg-gradient-to-b from-white to-green-100" },
  { id: 3, label: "Meat", image: "/category/category3.png", gradient: "bg-gradient-to-b from-white to-red-100" },
  { id: 4, label: "Dessert", image: "/category/category4.png", gradient: "bg-gradient-to-b from-white to-yellow-100" },
  { id: 5, label: "Lunch", image: "/category/category5.png", gradient: "bg-gradient-to-b from-white to-orange-100" },
  { id: 6, label: "Chocolate", image: "/category/category6.png", gradient: "bg-gradient-to-b from-white to-pink-100" },
];


const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <div className='py-12'>
          <Hero />
        </div>

        <div className="py-10 px-24">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
            <button className="text-sm font-medium bg-[#E7FAFE] px-4 py-2 rounded-xl hover:bg-blue-100 transition-colors duration-300">
              View All Categories
            </button>
          </div>
          
          <div className="flex justify-between space-x-4">
            {categories.map(category => (
              <CategoryCard key={category.id} label={category.label} image={category.image}  gradient={category.gradient} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;