// src/components/ArrivalsSection.jsx
import React from 'react';

const ArrivalsSection = () => {
  return (
    <div className="text-center py-12 bg-[#c5c397]">
      <h2 className="text-3xl mb-6">Our latest arrivals</h2>
      <button className="px-6 py-2 border border-black mb-10 hover:bg-black hover:text-white transition">
        Shop All
      </button>
      <div className="flex justify-center space-x-8">
        <div className="w-64 h-80 bg-[#856c00]"></div>  {/* Left image */}
        <div className="w-72 h-96 bg-[#b8860b]"></div>  {/* Center larger image */}
        <div className="w-64 h-80 bg-[#856c00]"></div>  {/* Right image */}
      </div>
    </div>
  );
};

export default ArrivalsSection;
