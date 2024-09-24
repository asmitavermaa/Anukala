import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Responsibility</a></li>
            <li><a href="#" className="hover:underline">Technology & Innovation</a></li>
            <li><a href="#" className="hover:underline">Explore our stories</a></li>
          </ul>
        </div>

        {/* Newsletter Sign Up Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Sign up for our newsletter</h3>
          <p className="mb-4">Be the first to know about our special offers, new product launches, and events.</p>
          <div className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 border border-gray-300 rounded-md mb-4 md:mb-0 md:mr-4 text-black"
            />
            <button className="px-6 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition mt-2 md:mt-0">
              Sign Up
            </button>
          </div>
        </div>

        {/* Shop Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Paintings</a></li>
            <li><a href="#" className="hover:underline">Nameplates</a></li>
            <li><a href="#" className="hover:underline">Wall Art</a></li>
            <li><a href="#" className="hover:underline">Decorative Items</a></li>
            <li><a href="#" className="hover:underline">By Activity</a></li>
            <li><a href="#" className="hover:underline">Gift Items</a></li>
            <li><a href="#" className="hover:underline">Sale</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Order Status</a></li>
            <li><a href="#" className="hover:underline">Size Chart</a></li>
            <li><a href="#" className="hover:underline">Returns & Warranty</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2024 Anukala. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
