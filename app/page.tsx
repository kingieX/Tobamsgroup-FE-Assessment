// app/page.tsx
import React from 'react';
import Layout from './layout';

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <header className="text-center py-16 bg-blue-100">
          <h1 className="text-5xl font-bold mb-4">Welcome to Foodieland</h1>
          <p className="text-lg text-gray-700">Discover the best recipes and cooking tips!</p>
        </header>

        <section className="featured-recipes py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Featured Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder for recipe cards */}
              <div className="recipe-card bg-white shadow-md rounded-lg p-4">
                <h3 className="text-xl font-semibold">Recipe 1</h3>
                <p className="text-gray-600">Description of Recipe 1.</p>
              </div>
              <div className="recipe-card bg-white shadow-md rounded-lg p-4">
                <h3 className="text-xl font-semibold">Recipe 2</h3>
                <p className="text-gray-600">Description of Recipe 2.</p>
              </div>
              <div className="recipe-card bg-white shadow-md rounded-lg p-4">
                <h3 className="text-xl font-semibold">Recipe 3</h3>
                <p className="text-gray-600">Description of Recipe 3.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;