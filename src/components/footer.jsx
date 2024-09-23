import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-100 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Newsletter Sign Up */}
        <div className="col-span-2">
          <h2 className="text-lg font-semibold">Sign up for our newsletter</h2>
          <p className="text-sm text-gray-700 mt-2 mb-4">
            Be the first to know about our special offers, new product launches, and events
          </p>
          <form className="flex items-center max-w-md">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 flex-grow"
            />
            <button 
              type="submit" 
              className="bg-black text-white py-2 px-4 rounded-r-md hover:bg-gray-800"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Shop</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-700 hover:underline">Paintings</a></li>
            <li><a href="#" className="text-sm text-gray-700 hover:underline">Nameplates</a></li>
            <li><a href="#" className="text-sm text-gray-700 hover:underline">Wall Art</a></li>
            <li><a href="#" className="text-sm text-gray-700 hover:underline">Decorative Items</a></li>

            <li><a href="#" className="text-sm text-gray-700 hover:underline">By Activity</a></li>
            <li><a href="#" className="text-sm text-gray-700 hover:underline">Gift Items</a></li>
            <li><a href="#" className="text-sm text-gray-700 hover:underline">Sale</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Help</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-700 hover:underline">Help Center</a></li>
            <li><a href="#" className="text-sm text-gray-700 hover:underline">Order Status</a></li>
            <li><a href="#" className="text-sm text-gray-700 hover:underline">Size Chart</a></li>
            <li><a href="#" className="text-sm text-gray-700 hover:underline">Returns & Warranty</a></li>
            <li><a href="#" className="text-sm text-gray-700 hover:underline">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-700 hover:underline">About Us</a></li>
            <li><a href="#" className="text-sm text-gray-700 hover:underline">Responsibility</a></li>
            <li><a href="#" className="text-sm text-gray-700 hover:underline">Technology & Innovation</a></li>
            <li><a href="#" className="text-sm text-gray-700 hover:underline">Explore our stories</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
