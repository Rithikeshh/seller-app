import React from 'react'
import { useParams } from 'react-router-dom'
function Pagination() {
  const {pageNumber} = useParams();
  const lastPage = 10;
  return (

    <div className='mb-2 bg-slate-200 mx-8 flex flex-wrap justify-between items-center px-6 py-4 rounded-2xl shadow-[0_0px_2px_1px_rgba(0,0,0,0.1)]'>
        <div>
          {pageNumber*6} from 60
        </div>
        <div className='flex gap-2'>
          <button className="bg-white rounded shadow-[0_0px_2px_1px_rgba(0,0,0,0.1)] px-2">&#129044;</button>
          <button className="bg-white rounded shadow-[0_0px_2px_1px_rgba(0,0,0,0.1)] px-2">{pageNumber}</button>
          <button className="bg-white rounded shadow-[0_0px_2px_1px_rgba(0,0,0,0.1)] px-2">{+pageNumber+1}</button>
          <button className="bg-white rounded shadow-[0_0px_2px_1px_rgba(0,0,0,0.1)] px-2">{+pageNumber+2}</button>
          <button className="bg-white rounded shadow-[0_0px_2px_1px_rgba(0,0,0,0.1)] px-2">{+pageNumber+3}</button>
          <button className="bg-white rounded shadow-[0_0px_2px_1px_rgba(0,0,0,0.1)] px-2">{lastPage-2}</button>
          <button className="bg-white rounded shadow-[0_0px_2px_1px_rgba(0,0,0,0.1)] px-2">{+lastPage-1}</button>
          <button className="bg-white rounded shadow-[0_0px_2px_1px_rgba(0,0,0,0.1)] px-2">{+lastPage}</button>
          <button className="bg-white rounded shadow-[0_0px_2px_1px_rgba(0,0,0,0.1)] px-2">&#129046;</button>
        </div>
    </div>
  )
}

export default Pagination
