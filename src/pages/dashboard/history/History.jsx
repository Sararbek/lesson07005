import React from 'react'

import historyImg from "@/assets/history.jpg"

const History = () => {
  return (
    <div>
      <h2 className=' text-2xl font-bold mb-4 '>Car history</h2>
      <img src={historyImg} alt="" className='max-w-[60%]' />
    </div>
  )
}

export default History