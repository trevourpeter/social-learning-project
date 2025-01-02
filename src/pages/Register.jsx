// src/pages/Register.js
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Register
        </h1>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            className="border rounded w-full p-2 mt-1 focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border rounded w-full p-2 mt-1 focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* First Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="border rounded w-full p-2 mt-1 focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="border rounded w-full p-2 mt-1 focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-6 relative">
          <label className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter your password"
            className="border rounded w-full p-2 mt-1 focus:ring focus:ring-blue-500 focus:outline-none"
          />
          <div
            className="absolute top-2/3 right-3 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? (
              <FiEyeOff className="text-gray-500" />
            ) : (
              <FiEye className="text-gray-500" />
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
          Register
        </button>

        {/* Footer */}
        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
