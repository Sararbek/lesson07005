import React from 'react'

import typeImg from "@/assets/cartypes.jpg"

const CarTypes = () => {
  return (
    <div>
      <h2 className=' text-2xl font-bold mb-4 '>Car types</h2>
      <img src={typeImg} alt="" className='w-[60%]' />
    </div>
  )
}

export default CarTypes