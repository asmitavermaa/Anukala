import React from 'react';

const ArrivalsSection = () => {
  return (
    <div className="text-center py-20 bg-[#c3c796]"> {/* Increased padding for more space */}
      <h2 className="text-4xl mb-8">Our latest arrivals</h2> {/* Larger heading */}
      <button className="px-8 py-3 border border-black mb-12 hover:bg-black hover:text-white transition">
        Shop All
      </button>
      <div className="flex justify-center space-x-10"> {/* Increased space between images */}
        <div className="w-72 h-96 bg-[#856c00]"></div>  {/* Left image, larger size */}
        <div className="w-80 h-[30rem] bg-[#b8860b]"></div>  {/* Center larger image */}
        <div className="w-72 h-96 bg-[#856c00]"></div>  {/* Right image, larger size */}
      </div>
    </div>
  );
};

export default ArrivalsSection;
