import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full fixed'>
        <div className='w-full h-36 bg-white flex items-center justify-between px-10 shadow-md'>
            <div className='text-3xl font-bold ml-20  text-blue-600'>BookTime</div>
            <div>
                <button className='px-4 py-2 rounded-md mr-4 hover:text-purple-700'>Sign in</button>

                <button className='text-black px-4 py-2 rounded-md mr-30 hover:text-purple-700'>Sign Up</button>
            </div>
            <div className='flex space-x-8 text-lg font-medium mr-20 '>
                <a href="#" className='text-black hover:text-purple-500'>Home</a>
                <a href="#" className='text-black hover:text-purple-500'>About</a>
                <a href="#" className='text-black hover:text-purple-500'>Series</a>
                <a href="#" className='text-black hover:text-purple-500'>Contributors</a>
                <a href="#" className='text-black hover:text-purple-500'>About Us</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar