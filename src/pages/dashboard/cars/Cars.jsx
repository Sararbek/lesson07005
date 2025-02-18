import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Cars = () => {


  return (
    <>
      <div  className='w-full mb-20'>
        <ul id='nestedRouter' className='flex items-center gap-5'>
            <li>
              <NavLink to={""} end={true} >Created Cars</NavLink>
            </li>
            <li>
              <NavLink to={"archivedcars"}>Archived Cars</NavLink>
            </li>
        </ul>
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default Cars