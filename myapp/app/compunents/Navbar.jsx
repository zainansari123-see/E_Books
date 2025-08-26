import React from 'react'
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className='w-full'>
        <div className='w-full h-25 bg-white flex items-center justify-between px-10 shadow-md'>
            <div className='text-3xl font-bold ml-20 text-blue-600'>BookTime</div>
            <div className="flex gap-6">
                 {/* Sign in */}
               <a href="/signin" className="flex items-center gap-2 hover:text-purple-700">
                <FaUserPlus /> Sign Up
              </a>

               {/* Sign up */}
              <a href="/signup" className="flex items-center gap-2 mr-36 hover:text-purple-700">
                <FaSignInAlt /> Sign In
              </a>
            </div>

        </div>
    </nav>
  )
}

export default Navbar