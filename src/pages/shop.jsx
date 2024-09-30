import React, { useState } from 'react';

function ShopPaintings() {
  const [selectedCategory, setSelectedCategory] = useState('Abstract');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full min-h-screen bg-[#c3c796] px-4 py-8"> 
      <div className="flex justify-between items-center mb-6">
        {/* Categories */}
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-sm border ${selectedCategory === 'Abstract' ? 'bg-black text-white' : 'border-black text-black'}`}
            onClick={() => handleCategoryClick('Abstract')}
          >
            Abstract
          </button>
          <button
            className={`px-4 py-2 rounded-sm border ${selectedCategory === 'Landscapes' ? 'bg-black text-white' : 'border-black text-black'}`}
            onClick={() => handleCategoryClick('Landscapes')}
          >
            Landscapes
          </button>
          <button
            className={`px-4 py-2 rounded-sm border ${selectedCategory === 'Portraits' ? 'bg-black text-white' : 'border-black text-black'}`}
            onClick={() => handleCategoryClick('Portraits')}
          >
            Portraits
          </button>
          <button
            className={`px-4 py-2 rounded-sm border ${selectedCategory === 'Still Life' ? 'bg-black text-white' : 'border-black text-black'}`}
            onClick={() => handleCategoryClick('Still Life')}
          >
            Still Life
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-black">Sort By</label>
          <select id="sort" className="border border-black px-2 py-1 rounded-sm">
            <option value="popular">Popular</option>
            <option value="new">New Arrivals</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* First Row of Items */}
        <div className="bg-gray-200 h-80 flex flex-col justify-center items-center">
          <div className="bg-gray-300 w-full h-64 mb-4"></div> {/* Placeholder for image */}
          <h2 className="text-center text-lg font-bold">Whispers of the Cosmos</h2>
          <p className="text-center text-gray-700">$350</p>
        </div>

        <div className="bg-gray-200 h-80 flex flex-col justify-center items-center">
          <div className="bg-gray-300 w-full h-64 mb-4"></div>
          <h2 className="text-center text-lg font-bold">Sunset Serenity</h2>
          <p className="text-center text-gray-700">$450</p>
        </div>

        <div className="bg-gray-200 h-80 flex flex-col justify-center items-center">
          <div className="bg-gray-300 w-full h-64 mb-4"></div>
          <h2 className="text-center text-lg font-bold">Ethereal Blossoms</h2>
          <p className="text-center text-gray-700">$250</p>
        </div>

        <div className="bg-gray-200 h-80 flex flex-col justify-center items-center">
          <div className="bg-gray-300 w-full h-64 mb-4"></div>
          <h2 className="text-center text-lg font-bold">Urban Reflections</h2>
          <p className="text-center text-gray-700">$105</p>
        </div>

        {/* Second Row of Items */}
        <div className="bg-gray-200 h-80 flex flex-col justify-center items-center">
          <div className="bg-gray-300 w-full h-64 mb-4"></div> {/* Placeholder for image */}
          <h2 className="text-center text-lg font-bold">Mystic Night</h2>
          <p className="text-center text-gray-700">$400</p>
        </div>

        <div className="bg-gray-200 h-80 flex flex-col justify-center items-center">
          <div className="bg-gray-300 w-full h-64 mb-4"></div>
          <h2 className="text-center text-lg font-bold">Ocean's Breeze</h2>
          <p className="text-center text-gray-700">$500</p>
        </div>

        <div className="bg-gray-200 h-80 flex flex-col justify-center items-center">
          <div className="bg-gray-300 w-full h-64 mb-4"></div>
          <h2 className="text-center text-lg font-bold">Golden Fields</h2>
          <p className="text-center text-gray-700">$600</p>
        </div>

        <div className="bg-gray-200 h-80 flex flex-col justify-center items-center">
          <div className="bg-gray-300 w-full h-64 mb-4"></div>
          <h2 className="text-center text-lg font-bold">Mountain Majesty</h2>
          <p className="text-center text-gray-700">$550</p>
        </div>
      </div>

      <div className="text-right mt-4 text-black">
        Showing 8 Products
      </div>
    </div>
  );
}

export default ShopPaintings;
