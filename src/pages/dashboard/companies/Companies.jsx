import React from 'react'

import companiesImg from "@/assets/companies.jpg"

const Companies = () => {
  return (
    <div>
      <h2 className=' text-2xl font-bold mb-4 '>Companies</h2>
      <img src={companiesImg} alt="" className='w-[60%]' />
    </div>
  )
}

export default Companies