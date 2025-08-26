import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';

const Content2 = () => {
  return (
                  /* content no.1*/
      <div>
        <div className='flex flex-row  mt-20 mb-10 '>
        <div className='text-2xl w-fit text-black mt-3 ml-25 flex-row-reverse' >Friends and Feelings</div>
        <a href="#" className="flex items-center gap-2 ml-200 text-purple-500 min-w-fit hover:text-purple-700">View All <FaLongArrowAltRight /></a>
      </div>
      <div className='grid grid-cols-6 gap-7 ml-25 mb-20'>
      <img src="/fish.png" alt="" />
      <img src="/alien.png" alt="" />
      <img src="/bear.png" alt="" />
      <img src="/princess.png" alt="" />
      <img src="/dino.png" alt="" />
      </div>

                       {/* content no.2 */}

      <div className='flex flex-row  mt-20 mb-10 '>
        <div className='text-2xl w-fit text-black mt-3 ml-25 flex-row-reverse' >We Can Count</div>
        <a href="#" className="flex items-center gap-2 ml-200 text-purple-500 min-w-fit hover:text-purple-700">View All <FaLongArrowAltRight /></a>
      </div>
      <div className='grid grid-cols-6 gap-7 ml-25 mb-20'>
      <img src="/tree.png" alt="" />
      <img src="/sea.png" alt="" />
      <img src="/cow.png" alt="" />
      <img src="/bus.png" alt="" />
      <img src="/jungle.png" alt="" />
      </div>

                          {/* content no.3 */}

      <div className='flex flex-row  mt-20 mb-10 '>
        <div className='text-2xl w-fit text-black mt-3 ml-25 flex-row-reverse' >We Can Count</div>
        <a href="#" className="flex items-center gap-2 ml-200 text-purple-500 min-w-fit hover:text-purple-700">View All <FaLongArrowAltRight /></a>
      </div>
      <div className='grid grid-cols-6 gap-7 ml-25 mb-20'>
      <img src="/tree.png" alt="" />
      <img src="/sea.png" alt="" />
      <img src="/cow.png" alt="" />
      <img src="/bus.png" alt="" />
      <img src="/jungle.png" alt="" />
      </div>

      <div className='flex flex-row  mt-20 mb-10 '>
        <div className='text-2xl w-fit text-black mt-3 ml-25 flex-row-reverse' >Let's Look Around</div>
        <a href="#" className="flex items-center gap-2 ml-200 text-purple-500 min-w-fit hover:text-purple-700">View All <FaLongArrowAltRight /></a>
      </div>
      <div className='grid grid-cols-6 gap-7 ml-25 mb-20'>
      <img src="/" alt="" />
      <img src="/" alt="" />
      <img src="/" alt="" />
      <img src="/" alt="" />
      <img src="/" alt="" />
      </div>
      
      </div>
  )
}
export default Content2