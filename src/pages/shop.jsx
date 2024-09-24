// src/components/shop.jsx
import React from 'react';
import { useState } from 'react'; 

function ShopPaintings() {
  const [selectedCategory, setSelectedCategory] = useState('Abstract');
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Shop Paintings</h1>
      <p className="text-lg text-center mb-8">
        Revamp your space with the latest trends in artistic expression or achieve a perfectly curated decor thanks to our collection of timeless paintings.
      </p>
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 rounded-md ${selectedCategory === 'Abstract' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleCategoryClick('Abstract')}
        >
          Abstract
        </button>
        <button
          className={`px-4 py-2 rounded-md ${selectedCategory === 'Landscapes' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleCategoryClick('Landscapes')}
        >
          Landscapes
        </button>
        <button
          className={`px-4 py-2 rounded-md ${selectedCategory === 'Portraits' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleCategoryClick('Portraits')}
        >
          Portraits
        </button>
        <button
          className={`px-4 py-2 rounded-md ${selectedCategory === 'Still Life' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleCategoryClick('Still Life')}
        >
          Still Life
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      
        <div className="bg-gray-200 h-64 rounded-md">
          <h2 className="text-center text-lg font-bold mb-2">Whispers of the Cosmos</h2>
          <p className="text-center text-gray-500">
            $350
          </p>
        </div>
        <div className="bg-gray-200 h-64 rounded-md">
          <h2 className="text-center text-lg font-bold mb-2">Sunset Serenity</h2>
          <p className="text-center text-gray-500">
            $450
          </p>
        </div>
        <div className="bg-gray-200 h-64 rounded-md">
          <h2 className="text-center text-lg font-bold mb-2">Ethereal Blossoms</h2>
          <p className="text-center text-gray-500">
            $250
          </p>
        </div>
        <div className="bg-gray-200 h-64 rounded-md">
          <h2 className="text-center text-lg font-bold mb-2">Urban Reflections</h2>
          <p className="text-center text-gray-500">
            $105
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShopPaintings;