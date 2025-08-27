import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='w-full h-35'>
            <img src="/logo.svg" alt=""  className='h-50 w-fit ml-25 py-16' />
        </div>
        <div className='w-full h-auto md:flex md:justify-between py-10'>
            <div className="md:w-1/3  ml-25">Booktime is an initiative of the Hindawi Foundation, a registered charity no. 1181788 in England and Wales. Registered address: York House, 41 Sheet Street, Windsor, SL4 1DD.</div>
            <div>
                <ul className="gap-4 flex flex-col ml-25">
                    <p>Menu</p>
                    <li><a href="#" className="hover:text-purple-700 hover:underline">Home</a></li>
                    <li><a href="#" className="hover:text-purple-700 hover:underline">Books</a></li>
                    <li><a href="#" className="hover:text-purple-700 hover:underline">Series</a></li>
                    <li><a href="#" className="hover:text-purple-700 hover:underline">Contributors</a></li>
                </ul>
            </div>
            <div className='md:w-1/3 flex justify-between'>
                <ul className="gap-4 flex flex-col mr-25">
                    <p>Menu</p>
                    <li><a href="#" className="hover:text-purple-700 hover:underline">About Us</a></li>
                    <li><a href="#" className="hover:text-purple-700 hover:underline">Donate</a></li>
                    <li><a href="#" className="hover:text-purple-700 hover:underline">Privicy Policy</a></li>
                    <li><a href="#" className="hover:text-purple-700 hover:underline">Terms and Condition</a></li>
                </ul>            
            </div>        
        </div>        
        <div className='w-full h-15 bg-black flex items-center justify-center'>
            <div className=' text-gray-400' >Copyrigh`t © 2025 Booktime. All rights reserved.</div>
        </div>
    </div>
  )
}

export default Footer