// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#c5c397]">
      <div className="text-xl font-bold">ANUKALA</div>
      <div className="space-x-8 text-lg">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <a href="#" className="hover:underline">Stories</a>
        <a href="#" className="hover:underline">About</a>
      </div>
      <div className="space-x-4 flex items-center">
        {/* Cart Icon */}
        <FaShoppingCart className="text-xl hover:underline" />
        <a href="#" className="hover:underline">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
