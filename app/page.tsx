// app/page.tsx
import React from 'react';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import RecipeCard from './components/RecipeCard';

// Categories data
const categories = [
  { id: 1, label: "Breakfast", image: "/category/category1.png", gradient: "bg-gradient-to-b from-white to-green-100" },
  { id: 2, label: "Vegan", image: "/category/category2.png", gradient: "bg-gradient-to-b from-white to-green-100" },
  { id: 3, label: "Meat", image: "/category/category3.png", gradient: "bg-gradient-to-b from-white to-red-100" },
  { id: 4, label: "Dessert", image: "/category/category4.png", gradient: "bg-gradient-to-b from-white to-yellow-100" },
  { id: 5, label: "Lunch", image: "/category/category5.png", gradient: "bg-gradient-to-b from-white to-orange-100" },
  { id: 6, label: "Chocolate", image: "/category/category6.png", gradient: "bg-gradient-to-b from-white to-pink-100" },
];

// Recipe data
const recipes = [
  {
    id: 1,
    type: 'recipe',
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    image: "/recipe/recipe1.png",
    time: "30 Minutes",
    label: "Snack",
    badge: "/heart-icon.svg",
    isLiked: true, // This recipe is liked
  },
  {
    id: 2,
    type: 'recipe',
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    image: "/recipe/recipe2.png",
    time: "30 Minutes",
    label: "Fish",
    badge: "/heart-icon.svg",
    isLiked: false, // This recipe is not liked
  },
  {
    id: 3,
    type: 'recipe',
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    image: "/recipe/recipe3.png",
    time: "30 Minutes",
    label: "Breakfast",
    badge: "/heart-icon.svg",
    isLiked: false, // This recipe is not liked
  },
  {
    id: 4,
    type: 'recipe',
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    image: "/recipe/recipe4.png",
    time: "30 Minutes",
    label: "Healthy",
    badge: "/heart-icon.svg",
    isLiked: true, // This recipe is liked
  },
  {
    id: 5,
    type: 'recipe',
    title: "Chicken Meatballs with Cream Cheese",
    image: "/recipe/recipe5.png",
    time: "30 Minutes",
    label: "Meat",
    badge: "/heart-icon.svg",
    isLiked: false, // This recipe is not liked
  },
  {
    id: 6,
    type: 'ad',
    title: "Chocolate Brownie with Whipped Cream",
    image: "/recipe/Ads.png",
  },
  {
    id: 7,
    type: 'recipe',
    title: "Fruity Pancake with Orange & Blueberry",
    image: "/recipe/recipe6.png",
    time: "30 Minutes",
    label: "Sweet",
    badge: "/heart-icon.svg",
    isLiked: true, // This recipe is  liked
  },
  {
    id: 8,
    type: 'recipe',
    title: "The Best Easy One Pot Chicken and Rice",
    image: "/recipe/recipe7.png",
    time: "30 Minutes",
    label: "Snack",
    badge: "/heart-icon.svg",
    isLiked: false, // This recipe is not liked
  },
  {
    id: 9,
    type: 'recipe',
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    image: "/recipe/recipe8.png",
    time: "30 Minutes",
    label: "Noodles",
    badge: "/heart-icon.svg",
    isLiked: false, // This recipe is not liked
  }
  // More recipes...
];



const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <div className='py-12'>
          <Hero />
        </div>

        {/* categories section */}
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

        {/* Recipe section */}
        <section className="py-12 px-24">
          {/* Heading and Description */}
          <div className="flex flex-col justify-center items-center text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Simple and tasty recipes</h2>
            <p className="text-gray-600 mt-4 max-w-xl text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Recipes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
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
      </div>
    </>
  );
};

export default HomePage;