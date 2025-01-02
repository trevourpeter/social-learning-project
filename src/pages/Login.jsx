// src/pages/Login.js
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const nav = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Login
        </h1>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border rounded w-full p-2 mt-1 focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border rounded w-full p-2 mt-1 focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Login Button */}
        <button onClick={() => nav("/home")} className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Login
        </button>

        {/* OR Divider */}
        <div className="my-6 flex items-center justify-center">
          <span className="border-t w-full border-gray-300"></span>
          <span className="px-4 text-sm text-gray-500">OR</span>
          <span className="border-t w-full border-gray-300"></span>
        </div>

        {/* Google Login Button */}
        <button
          className="flex items-center justify-center w-full border-2 text-black py-2 px-4 rounded transition"
          onClick={() => alert("Google Login Clicked")}
        >
          <FcGoogle className="text-xl mr-2" />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-sm text-gray-500 text-center mt-6">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
