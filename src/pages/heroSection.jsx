// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-start bg-[#c5c397] text-center px-4 pt-20">  {/* Added padding-top */}
      <h1 className="text-5xl font-bold mb-6">
        Art is not what you see, but what you make others see.
      </h1>
      <div className="w-80 h-[30rem] bg-[#b8860b]"></div>
      <button className="px-6 py-3 border border-black hover:bg-black hover:text-white transition">
        Shop All
      </button>
    </div>
  );
};

export default HeroSection;
