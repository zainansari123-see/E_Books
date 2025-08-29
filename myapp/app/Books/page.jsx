import React from 'react'
import Navbar from '../compunents/Navbar'
import Navbar2 from '../compunents/Navbar2'     

const page = () => {
  return (
    <div>
      <div className='relative'>
      <Navbar />
      <Navbar2 />
      </div>
      <div className='h-30 w-full bg-blue-100 flex flex-row '>
        <img src="dino1.png" alt=""className='h-37 ml-25 w-50 pt-8 mr-85' />
        <div className='text-3xl text-gray-500 font-sans mr-60 pt-10'>Books</div>
        <img src="dino2.png" alt=""className='h-30 w-42 ml-25 ' />
      </div>
    </div>
  )
}

export default page