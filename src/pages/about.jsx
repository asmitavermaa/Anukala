import React from 'react';

const About = () => {
  return (
    <div className="bg-[#c3c796] about-page py-16 px-8 md:px-16">
      <h1 className="text-4xl font-bold text-center mb-12">About the Painters</h1>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row mb-16 items-center justify-center">
        {/* Placeholder box */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-3/4 h-80 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left px-4">
          <h2 className="text-4xl font-bold mb-4">Mission</h2>
          <p className="text-2xl">
            Our artists strive to create timeless, captivating artwork that resonates with viewers. 
            The mission is to convey emotions, stories, and beauty through every brushstroke, while 
            fostering a deep connection with art lovers across the globe.
          </p>
        </div>
      </div>

      {/* Meet the Painters Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center">
        {/* Placeholder box */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-3/4 h-80 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:pr-12 text-center md:text-left px-4">
          <h2 className="text-4xl font-bold mb-4">Meet the Painters</h2>
          <p className="text-2xl">
            Behind each masterpiece is a team of talented artists who pour their hearts into every 
            creation. Meet Amita Verma and Swarnima Mathur, best friends with a shared passion for 
            bringing art to life. They have dedicated their lives to perfecting their craft and 
            sharing their love for art with the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
