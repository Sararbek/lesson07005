import { DADHBOARD_ROUTES } from '@/static/Index'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='flex '>
        <div className='sticky top-0 left-0 overflow-y-auto w-[17%] bg-[#F1F2F7] flex flex-col '>
            <div className='h-20 border-b border-slate-400 flex items-center p-6 '>
                <p className='text-[#5A6ACF] uppercase text-xl font-semibold'>Creat cars</p>
            </div>
            <div className='flex-1 flex flex-col p-6 '>
                <ul className='flex-1 space-y-1'>
                    {
                      DADHBOARD_ROUTES?.map((route, inx) => (
                        <li id='dashboard' key={inx}  >
                            <NavLink className=' block text-[#273240] py-1.5 rounded px-1 capitalize text-sm font-medium ' to={route.path}>{route.name}</NavLink>
                        </li>
                      ))
                    }
                </ul>
                <div className=''>
                    <button >Log out</button>
                </div>
            </div>
        </div>
        <div className=' flex-1 overflow-y-auto h-screen '>
            <div className='h-20 border-b border-slate-400 sticky top-0 left-0 z-10 bg-white shadow '>

            </div>
            <main className='p-8'>
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default Admin