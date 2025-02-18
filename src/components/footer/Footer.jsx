import React from 'react'

import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='py-5 bg-[#efefef] text-black '>
      <div className='container max-w-7xl mx-auto px-4 '>
          <div className='flex items-center justify-center gap-1 '>
            <span><FaRegCopyright/></span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
      </div>
    </footer>
  )
}

export default Footer