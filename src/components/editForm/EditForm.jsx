import { useUpdateCarMutation } from '@/redux/api/cars.api'
import React, { useEffect, useState } from 'react'

const EditForm = ({data, setEdit}) => {
    console.log(data)
    const [value, setValue] = useState(data)
    const [updateCar, {isLoading}] = useUpdateCarMutation()
    const handleForm = e => {
        e.preventDefault()
        updateCar({id: value.id, body: value}).unwrap().then(() => {
            setEdit(null)
        })
    }

  return (
    <>
        <div onClick={() => setEdit(null)} className=' w-full h-screen fixed flex items-center justify-center top-0 left-0 bg-[#0002] z-40 '>
        <div onClick={e => e.stopPropagation()} className='max-w-[50%] w-full py-8 px-12 rounded-lg bg-white'>
                <form onSubmit={handleForm} action="" className=' flex flex-col gap-8 '>
                    <div className=' flex flex-col gap-1 '>
                        <label className=' text-[#5A6ACF] text-xs uppercase font-medium ' htmlFor="">Car name</label>
                        <input type="text" value={value.name} onChange={e => setValue(prev => ({...prev, name: e.target.value}))} className=' outline-none border-b border-[#5A6ACF] ' />
                    </div>
                    <div className=' flex flex-col gap-1 '>
                        <label className=' text-[#5A6ACF] text-xs uppercase font-medium ' htmlFor="">Car brand</label>
                        <input type="text" value={value.brand} onChange={e => setValue(prev => ({...prev, brand: e.target.value}))} className=' outline-none border-b border-[#5A6ACF] ' />
                    </div>
                    <div className=' flex flex-col gap-1 '>
                        <label className=' text-[#5A6ACF] text-xs uppercase font-medium ' htmlFor="">Car imgurl</label>
                        <input type="text" value={value.image} onChange={e => setValue(prev => ({...prev, image: e.target.value}))} className=' outline-none border-b border-[#5A6ACF] ' />
                    </div>
                    <div className=' flex flex-col gap-1 '>
                        <label className=' text-[#5A6ACF] text-xs uppercase font-medium ' htmlFor="">Car company</label>
                        <input type="text" value={value.company} onChange={e => setValue(prev => ({...prev, company: e.target.value}))} className=' outline-none border-b border-[#5A6ACF] ' />
                    </div>
                    <div className=' flex flex-col gap-1 '>
                        <label className=' text-[#5A6ACF] text-xs uppercase font-medium ' htmlFor="">Prouced year</label>
                        <input type="number" value={value.producedYear} onChange={e => setValue(prev => ({...prev, producedYear: e.target.value}))} className=' outline-none border-b border-[#5A6ACF] ' />
                    </div>
                    <div className=' flex flex-col gap-1 '>
                        <label className=' text-[#5A6ACF] text-xs uppercase font-medium ' htmlFor="">Price</label>
                        <input type="number" value={value.price} onChange={e => setValue(prev => ({...prev, price: e.target.value}))} className=' outline-none border-b border-[#5A6ACF] ' />
                    </div>
                    <button className=' py-1 bg-[#5A6ACF] text-white cursor-pointer disabled:cursor-default disabled:opacity-60 ' disabled={isLoading} >{isLoading ? "Loading..." : "Save"}</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default EditForm