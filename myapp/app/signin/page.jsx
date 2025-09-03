import React from "react";
import { FaGoogle, FaFacebookF, FaEnvelope, FaGraduationCap } from "react-icons/fa";
import CC from '../compunents/CC';

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Logo */}
      <div className="mb-10">
        <img src="/logo.png" alt="" className="h-20 w-20 mt-30" />
      </div>

      {/* Sign-in box */}
      <div className="w-full max-w-md p-6 mb-5 flex flex-col bg-gray-100 rounded-3xl items-center gap-4">
        {/* Google */}
        <button className="w-full flex gap-3 border rounded-lg py-3 border-white bg-white hover:shadow-md">
          <FaGoogle className=" text-xl ml-5 mr-16" />
          Continue with Google
        </button>
        {/* Facebook */}
        <button className="w-full flex gap-3 border rounded-lg py-3 border-white bg-white hover:shadow-md">
          <FaFacebookF className=" text-xl ml-5 mr-14" />
          Continue with Facebook
        </button>

        {/* Email */}
        <button className="w-full flex gap-3 border rounded-lg py-3 border-white bg-white hover:shadow-md">
          <FaEnvelope className=" text-xl ml-5 mr-18" />
          Continue with email
        </button>
      </div>

        {/* Divider */}
        <div className="flex items-center w-110 gap-2 my-2">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-500 text-sm">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <div className="w-full mt-5 max-w-md p-6 flex flex-col mb-4 bg-gray-100 rounded-3xl items-center gap-4">
        {/* School account */}
        <button className="w-full flex gap-3 border rounded-lg py-3 border-white bg-white hover:shadow-md">
          <FaGraduationCap className="text-gray-800 text-3xl ml-5 mr-8" />
          Continue with your school account
        </button>
        </div>
        <p className="text-gray-400">By Signing up, you agree to our <a href="#" className="text-purple-600">Privacy Policy</a> and </p>
        <a href="#" className="mb-25 text-purple-600">Terms and Conditions.</a>
      <CC />
    </div>
    
  );
}
