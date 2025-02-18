import React from 'react'

import countriesImg from "@/assets/countries.jpg"

const Countries = () => {
  return (
    <div>
      <h2 className=' text-2xl font-bold mb-4 '>Countries that lead in terms of car production</h2>
      <img src={countriesImg} alt="" className='max-w-[60%]' />
    </div>
  )
}

export default Countries