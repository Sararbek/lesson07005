import EditForm from '@/components/editForm/EditForm';
import { useDeleteCarMutation, useGetCarsQuery } from '@/redux/api/cars.api'
import React, { useState } from 'react'

import { RiEdit2Fill } from "react-icons/ri";
import { IoMdArchive } from "react-icons/io";

import { useDispatch } from 'react-redux';
import { addToArchive } from '@/redux/features/archivedcars.slice';
const CreatedCars = () => {

    const dispatch = useDispatch()
    const [edit, setEdit] = useState(null)
    const { data } = useGetCarsQuery()
    const [deleteFun, {isLoading}] = useDeleteCarMutation()
    const handleEdit = (car) => {
      setEdit(car)
    }

    const handleArchive = (car) => {
        dispatch(addToArchive(car))
        deleteFun(car.id)
    }
  
  return (
    <>
    {edit && <EditForm data={edit} setEdit={setEdit} />}
      <section>
        <div className='mb-4'>
          <h2 className=' text-2xl font-bold '>Cars</h2>
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
                        <button onClick={() => handleArchive(car)} disabled={isLoading} className=' disabled:cursor-default disabled:opacity-70 flex items-center gap-1 text-sm py-2 px-7 text-white bg-red-500 rounded cursor-pointer active:bg-red-300 '><IoMdArchive/> {isLoading ? "Loading..." : "Archive"}</button>
                        <button onClick={() => handleEdit(car)} className=' disabled:cursor-default disabled:opacity-70 flex items-center gap-1 text-sm py-2 px-7 text-white bg-green-500 rounded cursor-pointer active:bg-green-300 '><RiEdit2Fill/> Edit</button>
                      </div>
                  </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default CreatedCars