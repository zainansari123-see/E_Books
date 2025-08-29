import React from 'react'
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='w-full'>
        <div className='w-full h-25 bg-white flex items-center justify-between px-10 shadow-md'>
            <div className=''>
              <img src="/logo.svg" alt="" className='h-12 w-fit ml-15'/>
            </div>
            <div className="flex gap-6">
               {/* Sign up */}
                <Link href="/signup" className="flex items-center gap-2 hover:text-purple-700">
                   <FaUserPlus /> Sign Up
                </Link>

                 {/* Sign in */}
              <Link href="/signin" className="flex items-center gap-2 mr-36 hover:text-purple-700">
                   <FaUserPlus /> Sign In
              </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar