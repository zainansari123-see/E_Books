import React from 'react'
import Navbar from '../compunents/Navbar'
import Navbar2 from '../compunents/Navbar2'     
import Bannar from '../compunents/Bannar'
import Footer from '../compunents/Footer'

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
      
      <div>
              <div className='flex flex-row  mt-20 mb-10 '>
              <div className='w-fit text-gray-400 mt-3 ml-25 flex-row-reverse' >Showing 1–25 of 215 Books</div>
            </div>
            <div className='grid grid-cols-5  gap-3 ml-23 mr-23'>
            <img src="/tree.png" alt="" />
            <img src="/sea.png" alt="" />
            <img src="/cow.png" alt="" />
            <img src="/bus.png" alt="" />
            <img src="/jungle.png" alt="" className='mb-10' />
            </div>
           </div>
            <div className='grid grid-cols-5  gap-3 ml-23 mr-23'>
            <img src="/tree.png" alt="" />
            <img src="/sea.png" alt="" />
            <img src="/cow.png" alt="" />
            <img src="/bus.png" alt="" />
            <img src="/jungle.png" alt="" className='mb-10' />
            </div>
            <div className='grid grid-cols-5  gap-3 ml-23 mr-23'>
            <img src="/tree.png" alt="" />
            <img src="/sea.png" alt="" />
            <img src="/cow.png" alt="" />
            <img src="/bus.png" alt="" />
            <img src="/jungle.png" alt="" className='mb-10' />
            </div>
            <div className='grid grid-cols-5  gap-3 ml-23 mr-23'>
            <img src="/tree.png" alt="" />
            <img src="/sea.png" alt="" />
            <img src="/cow.png" alt="" />
            <img src="/bus.png" alt="" />
            <img src="/jungle.png" alt="" className='mb-10' />
            </div>
            <div className='grid grid-cols-5  gap-3 ml-23 mr-23'>
            <img src="/tree.png" alt="" />
            <img src="/sea.png" alt="" />
            <img src="/cow.png" alt="" />
            <img src="/bus.png" alt="" />
            <img src="/jungle.png" alt="" className='mb-10' />
            </div>
            <Bannar />
            <Footer />
    </div>
  )
}

export default page