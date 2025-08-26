import React from 'react'
import Navbar from './compunents/Navbar'
import Navbar2 from './compunents/Navbar2'
import Content from './compunents/Content'


const Home = () => {
  return (
    <div>
      <div className='w-full h-screen bg-gray-100'>
        <Navbar/>
        <Navbar2/>
        <Content/>
      </div>
    </div>
  )
}



export default Home