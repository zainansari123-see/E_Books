import React from "react";
import CC from '../compunents/CC';

const RegistrationForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover">
      <div className="w-110 bg-gray-100 p-10 mt-20 rounded-lg shadow-lg">
        <img src="/logo.png" alt="logo" className="ml-30 mb-15 w-20 h-20"/>

        <form action="#" method="post" className="flex flex-col">
          {/* Full Name */}
          <label className="text-lg mb-2">Full Name:</label>
          <input
            type="text" name="fullname" placeholder="Full Name" className="mb-4 px-3 py-2 rounded-md text-black outline-none hover:shadow-md"
          />

          {/* Username */}
          <label className="text-lg mb-2">User Name:</label>
          <input
            type="text" name="username" placeholder="User Name" className="mb-4 px-3 py-2 rounded-md text-black outline-none hover:shadow-md"
          />

          {/* Email */}
          <label className="text-lg mb-2">Email:</label>
          <input
            type="email" name="email" placeholder="Email" className="mb-4 px-3 py-2 rounded-md text-black outline-none hover:shadow-md"
          />

          {/* Password */}
          <label className="text-lg mb-2">Password:</label>
          <input
            type="password" name="password" placeholder="Password" className="mb-4 px-3 py-2 rounded-md text-black outline-none hover:shadow-md"
          />

          {/* Button */}
          <button
            type="submit"
            className=" text-black font-bold w-fit ml-33 py-2 rounded-md hover:text-red-500 transition hover:shadow-md">
            Register
          </button>
          
        </form>
        <p className="text-gray-400">By Signing up, you agree to our <a href="#" className="text-purple-600">Privacy Policy</a> and </p>
        <a href="#" className="mb-25 text-purple-600 w-full">Terms and Conditions.</a>
      <CC />
      </div>
    </div>
  );
};

export default RegistrationForm;