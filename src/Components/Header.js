import React, { useEffect } from 'react'
import search_icon from '../Assets/search.png'
import { useNavigate } from 'react-router-dom'
function Header() {
    // const navigate = useNavigate();
    // useEffect(()=>{
    //     navigate('/page/1')
    // },[])
  return (
    <div className='mt-1 bg-slate-200 flex flex-wrap justify-start items-center gap-9 px-6 py-4 shadow-[0_0px_2px_1px_rgba(0,0,0,0.1)]'>
        <div className='flex bg-white rounded-2xl  justify-center gap-1 w-[420px]'>
            <input type='text'  placeholder='Search...' className='font-medium text-zinc-600 pl-4 py-2 rounded-2xl w-[100%]'></input>
            <img  src={search_icon} className='object-contain pr-2'/>
        </div>
        <div className='flex gap-9 flex-wrap'>
        <div className='text-slate-700 font-semibold'>
            <select disabled className='bg-inherit'>
                <option>Relevance</option>
            </select>
        </div>
        <div className='text-slate-700 font-semibold'>
        <select disabled className='bg-inherit'>
                <option>All brands</option>
            </select>
        </div>
        </div>
    </div>
  )
}

export default Header
