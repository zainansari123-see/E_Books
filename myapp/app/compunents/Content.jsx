import React from 'react'

const Content = () => {
  return (
    <div className='w-full h-63 py-5 bg-sky-100 flex'>
      <div className='flex flex-col mt-10'>
      <div className='ml-27 text-3xl font-bold w-fit text-black mt-3' >Booktime</div>
      <div className='ml-27 text-gray-600 w-fit mt-3' >Booktime is the children's and young readers' gateway to a world of knowledge and</div>
      <div className='ml-27 text-gray-600 w-fit' >imagination. Explore a variety of interesting books and enjoyable stories in different languages.</div>
      </div>
      <img src="/hero.png" alt="" className='w-95 h-65' />
    </div>
        
  )
}

export default Content