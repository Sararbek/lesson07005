import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='py-5 bg-black text-white '>
        <div className="container max-w-7xl mx-auto px-4 ">
            <div className='flex items-center justify-between '>
                <div>
                    <h2 className='text-2xl font-semibold '>createCars</h2>
                </div>
                <ul>
                    <li>
                        <NavLink to={'/admin'} >Admin</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}
export default Header