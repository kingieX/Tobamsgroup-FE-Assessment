// app/page.tsx
import React from 'react';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import RecipeCard from './components/RecipeCard';
import ChefSection from './components/ChefSection';
import InstagramCard from './components/InstagramCard';

import { FaInstagram } from "react-icons/fa6";
import RecipeCardAlt from './components/RecipeCardAlt';
import EmailCard from './components/EmailCard';

// data
import { categories } from './data/categories';
import { recipes } from './data/recipes';
import { instagramImages } from './data/instagramImages';
import { recipes2 } from './data/recipesalt';

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <div className='lg:py-12 py-6 px-8'>
          <Hero />
        </div>

        {/* categories section */}
        <div className="lg:py-10 py-8 lg:px-24 px-8">
          <div className="flex justify-between items-center lg:mb-12 mb-8">
            <h2 className="lg:text-2xl text-xl font-bold text-gray-900">Categories</h2>
            <button className="text-sm font-medium bg-[#E7FAFE] px-4 py-2 rounded-xl hover:bg-blue-100 transition-colors duration-300">
              View All Categories
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                label={category.label}
                image={category.image}
                gradient={category.gradient}
              />
            ))}
          </div>

        </div>

        {/* Recipe section */}
        <section className="lg:py-12 py-8 lg:px-24 px-8">
          {/* Heading and Description */}
          <div className="flex flex-col justify-center items-center text-center lg:mb-16 mb-8">
            <h2 className="lg:text-3xl text-2xl font-bold text-gray-900">Simple and tasty recipes</h2>
            <p className="text-gray-600 mt-4 lg:max-w-xl text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Recipes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                type={recipe.type}
                title={recipe.title}
                image={recipe.image}
                time={recipe.time}
                label={recipe.label}
                badge={recipe.badge}
                isLiked={recipe.isLiked}
              />
            ))}
          </div>
        </section>

        {/* Chef Section */}
        <section className="lg:py-16 py-8 lg:px-24 px-8">
          <ChefSection />
        </section>

        {/* Instagram post */}
        <section className="lg:py-12 py-8 lg:px-24 px-8 lg:bg-gradient-to-b from-white to-[#E7F9FD]">
          <div className='flex flex-col items-center mb-8'>
            <h2 className="lg:text-4xl text-2xl font-medium text-center lg:mb-8 mb-4">Check out @foodieland on Instagram</h2>
              <p className="text-center text-gray-600 lg:max-w-2xl lg:mb-8 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
          </div>
          <div className="flex lg:flex-row flex-col justify-center lg:gap-8 gap-4 lg:mb-16 mb-8">
            {instagramImages.map((image, index) => (
              <InstagramCard key={index} image={image} />
            ))}
          </div>
          <div className="flex justify-center text-center mt-8">
            <button className="flex items-center gap-2 px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
              <span className='text-sm'>Visit Our Instagram</span> <FaInstagram />
            </button>
          </div>
        </section>

        {/* Second Recipe */}
        <section className="lg:py-24 lg:px-24 py-8 px-8">
          <div className='flex lg:flex-row flex-col items-center justify-between mb-8'>
            <h1 className="lg:text-3xl text-2xl text-center font-medium max-w-md lg:text-left lg:mb-8 mb-4">Try this delicious recipe to make your day</h1>
            <p className="lg:text-left text-center text-gray-600 max-w-xl lg:mb-8 mb-4">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
          </div>

          {/* Recipes Grid 2*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4">
            {recipes2.map((recipe) => (
              <RecipeCardAlt
                key={recipe.id}
                type={recipe.type}
                title={recipe.title}
                image={recipe.image}
                time={recipe.time}
                label={recipe.label}
                badge={recipe.badge}
                isLiked={recipe.isLiked}
              />
            ))}
          </div>
        </section>

        {/* Email card */}
        <EmailCard />

      </div>
    </>
  );
};

export default HomePage;