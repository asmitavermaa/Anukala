import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const images = [
    'https://via.placeholder.com/1200x800/FFD700', // Replace with actual image URLs
    'https://via.placeholder.com/1200x800/FF8C00',
    'https://via.placeholder.com/1200x800/DC143C',
    'https://via.placeholder.com/1200x800/4682B4',
    'https://via.placeholder.com/1200x800/32CD32'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="h-screen flex flex-col items-center justify-start bg-[#78b087] text-center px-4 pt-20">
      <div
        className="w-[80%] h-[80vh] bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
      
    </div>
  );
};

export default HeroSection;
