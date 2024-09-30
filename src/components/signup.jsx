import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    
    console.log("Signup form data:", formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Create Your Account</h1>
      <form onSubmit={handleSignup} className="max-w-lg mx-auto">
        <div className="relative mt-6">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Full Name"
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
        <div className="relative mt-6">
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Email"
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
        <div className="relative mt-6">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Password"
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
          <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          {showPassword ? (
            <FaEyeSlash
              className="absolute right-3 cursor-pointer top-1/2 -translate-y-1/2 text-gray-500"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <FaEye
              className="absolute right-3 cursor-pointer top-1/2 -translate-y-1/2 text-gray-500"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg mt-6"
        >
          Sign Up
        </button>
        <p className="text-center mt-4">
          Already have an account? <a href="/login" className="text-blue-500">Log In</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
