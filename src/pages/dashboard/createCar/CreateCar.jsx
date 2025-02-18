import { useCreateCarMutation } from '@/redux/api/cars.api'
import React from 'react'

const CreateCar = () => {

    const [createCard, {isLoading}] = useCreateCarMutation()

    const handleForm = e => {
        e.preventDefault()
        let formData = new FormData(e.target)
        let data = Object.fromEntries(formData)
        createCard(data)
        e.target.reset()
    }
 
  return (
    <>
        <section>
            <div className='mb-16'>
                <h2 className=' text-2xl font-bold '>Create your own car cards</h2>
            </div>
            <div className='max-w-[50%] mx-auto'>
                <form onSubmit={handleForm} action="" className=' flex flex-col gap-8 '>
                    <div className=' flex flex-col gap-1 '>
                        <label className=' text-[#5A6ACF] text-xs uppercase font-medium ' htmlFor="">Car name</label>
                        <input type="text" name='name' className=' outline-none border-b border-[#5A6ACF] ' />
                    </div>
                    <div className=' flex flex-col gap-1 '>
                        <label className=' text-[#5A6ACF] text-xs uppercase font-medium ' htmlFor="">Car brand</label>
                        <input type="text" name='brand' className=' outline-none border-b border-[#5A6ACF] ' />
                    </div>
                    <div className=' flex flex-col gap-1 '>
                        <label className=' text-[#5A6ACF] text-xs uppercase font-medium ' htmlFor="">Car imgurl</label>
                        <input type="text" name='image' className=' outline-none border-b border-[#5A6ACF] ' />
                    </div>
                    <div className=' flex flex-col gap-1 '>
                        <label className=' text-[#5A6ACF] text-xs uppercase font-medium ' htmlFor="">Car company</label>
                        <input type="text" name='company' className=' outline-none border-b border-[#5A6ACF] ' />
                    </div>
                    <div className=' flex flex-col gap-1 '>
                        <label className=' text-[#5A6ACF] text-xs uppercase font-medium ' htmlFor="">Prouced year</label>
                        <input type="number" name='producedYear' className=' outline-none border-b border-[#5A6ACF] ' />
                    </div>
                    <div className=' flex flex-col gap-1 '>
                        <label className=' text-[#5A6ACF] text-xs uppercase font-medium ' htmlFor="">Price</label>
                        <input type="number" name='price' className=' outline-none border-b border-[#5A6ACF] ' />
                    </div>
                    <button className=' py-1 bg-[#5A6ACF] text-white disabled:cursor-default disabled:opacity-60 ' disabled={isLoading} >Create your car card</button>
                </form>
            </div>
        </section>
    </>
  )
}

export default CreateCar