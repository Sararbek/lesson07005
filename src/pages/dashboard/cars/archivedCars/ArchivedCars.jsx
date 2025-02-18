import { useCreateCarMutation } from '@/redux/api/cars.api';
import { removeFromArchive } from '@/redux/features/archivedcars.slice';
import React from 'react'

import { FaRegTrashAlt } from "react-icons/fa";
import { MdAssignmentReturn } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'

const ArchivedCars = () => {

    const data = useSelector((state) => state.archive.value)
    const [recreateFun, {isLoading}] = useCreateCarMutation()
    const dispatch = useDispatch()
    const handleReturn = car => {
        recreateFun(car).unwrap().then(() => {
            dispatch(removeFromArchive(car))
        })      
    }

  return (
      <section>
        <div className='mb-4'>
          <h2 className=' text-2xl font-bold '>Archive</h2>
        </div>
        <div className=' grid grid-cols-4 gap-5 '>
          {
            data?.map(car => (
              <div key={car.id}>
                  <div className='w-full h-40 '>
                    <img src={car.image} alt="" className='  w-full h-full object-cover  ' />
                  </div>
                  <div className=' space-y-2 py-3 '>
                      <p>Name: <span>{car.name}</span></p>
                      <p>Brand: <span>{car.brand}</span></p>
                      <p>Company: <span>{car.company}</span></p>
                      <p>producedYear: <span>{car.producedYear}</span></p>
                      <p>Price: <span>${car.price}</span></p>
                      <div className='flex items-center gap-1 mt-4'>
                        <button onClick={() => dispatch(removeFromArchive(car))} className=' disabled:cursor-default disabled:opacity-70 flex items-center gap-1 text-sm py-2 px-7 text-white bg-red-500 rounded cursor-pointer active:bg-red-300 '><FaRegTrashAlt/> Delete</button>
                        <button onClick={() => handleReturn(car)} disabled={isLoading} className=' disabled:cursor-default disabled:opacity-70 flex items-center gap-1 text-sm py-2 px-7 text-white bg-green-500 rounded cursor-pointer active:bg-green-300 '><MdAssignmentReturn/> { isLoading ? "Loading..." : "Return" }</button>
                      </div>
                  </div>
              </div>
            ))
          }
        </div>
      </section>
  )
}

export default ArchivedCars