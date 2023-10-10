import React from 'react'
import {cars} from './CarDetails'
import Pagination from './Pagination'
import { useParams } from 'react-router-dom'
function Cards() {
    const carImageApi = 'https://api.unsplash.com/search/collections/?page=1&query=vehicle&client_id=x2VER5Uy2ucbnYYwJFNdi91QtD9FF8E45h63_T9xyZU'
    const images = [
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://media.istockphoto.com/id/1402797185/photo/black-electric-suv-charing-at-home-garage.jpg?s=612x612&w=0&k=20&c=ymw6yypxHWW8SYFAdHJ6IdomuJlb2DDhryoJOGH-Qfk='
    ]
    
  return (
    <div>
        <div className='cards-container flex gap-6 flex-wrap justify-center m-8'>
            {/*card*/}
            {images.map((image)=>{
                const index = Math.ceil(Math.random()*5)
            return(
                <div className='card bg-slate-200 rounded-xl shadow-[0_0px_2px_1px_rgba(0,0,0,0.1)]'>
                    <div className='card--image-container max-w-[400px] rounded p-2'>
                        <img className='rounded-xl object-cover aspect-[4/3]' src={image}/>
                    </div>
                    <div className='py-2 px-5 flex justify-between items-center'>
                        <h4 className='font-medium text-[24px] text-slate-700'>{cars[index].name}</h4>
                        <div className=' text-slate-700 font-medium text-[16px] px-2 rounded-xl border-2 border-dashed border-sky-500 '>{cars[index].year}</div>
                    </div>
                    <div className='flex gap-1 px-5 pb-3 flex-col text-slate-600 text-[18px] border-b-[1px] border-slate-300'>
                        <div className='flex'>
                            <div className='flex-grow'>4 People</div>
                            <div className='flex-grow'>Hybrid</div>
                        </div>
                        <div className='flex '>
                            <div className='flex-grow'>{cars[index].milage} km/liter</div>
                            <div className='flex-grow'>Automatic</div>
                        </div>
                    </div>
                    <div className='px-5 flex items-center justify-between my-4'>
                        <div className='flex text-slate-600'>
                            <p className='text-[24px] font-medium align-middle'>${cars[index].rent}</p>
                            <span className='text-[12px] pl-1 pt-3 font-medium'>/month</span>
                        </div>
                        <div >
                            <button disabled className='bg-cyan-600 rounded-xl text-white px-3 py-1'>Rent Now</button>
                            {/* Rent Now */}
                        </div>
                    </div>
                </div>
            )})}
        </div>
        <Pagination/>
    </div>
  )
}

export default Cards
