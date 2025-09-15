import React from 'react'

const Navbar2 = () => {
  return (
    <div className='w-full h-16 items-center flex justify-between px-10 shadow-md'>
       <div className='flex space-x-8 ml-18 text-lg font-medium mr-20 '>
          <a href="/" className='text-black hover:text-purple-500'>Home</a>
          <a href='/Books' className='text-black hover:text-purple-500'>Books</a>
          <a href="#" className='text-black hover:text-purple-500'>Series</a>
          <a href="#" className='text-black hover:text-purple-500'>Contributors</a>
          <a href="#" className='text-black hover:text-purple-500'>About Us</a>
        </div>
    </div>
  )
}

export default Navbar2