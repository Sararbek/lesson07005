import React from 'react'

import rankingImg from "@/assets/ranking.jpg"

const Ranking = () => {
  return (
    <div>
      <h2 className=' text-2xl font-bold mb-4 '>Car Rankings</h2>
      <img src={rankingImg} alt="" />
    </div>
  )
}

export default Ranking