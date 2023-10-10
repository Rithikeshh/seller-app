import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const images = [
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80',
    'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  ]
  const navigate = useNavigate();
  const [index, setIndex] = useState(0)
  const [isSmooth, setIsSmooth] = useState(true)
  const carouselRef = useRef(null);

  function scrollToIndexSmoothly(index, isSmooth) {
    const divNode = carouselRef.current;
    const imgNode = divNode.querySelectorAll('div > img')[index];
    imgNode.scrollIntoView({
      behavior: isSmooth ? 'smooth' : 'instant',
      block: 'nearest',
      inline: 'center'
    });
  }
  function handlePrev(){
    // index == 0 ? setIndex(3) : setIndex(index-1);
    if(index == 0){
      setIndex(3);
      setIsSmooth(false);
    }
    else{
      setIndex(index-1)
      setIsSmooth(true)
    } 
  }
  function handleNext(){
    // index == 3 ? setIndex(0) : setIndex(index+1); 
    if(index == 3){
      setIndex(0);
      setIsSmooth(false)
    }
    else{
      setIndex(index + 1)
      setIsSmooth(true)
    }
  }
  useEffect(()=>{
    scrollToIndexSmoothly(index, isSmooth)
  },[index])
  return (
    <div className='relative'>
      <div ref={carouselRef} id='carousel' className='relative w-[100vw] flex snap-x snap-mandatory overflow-x-scroll'>
        {images.map((image)=>{
          return <div className='grow-0 shrink-0 basis-full snap-start '>
            <img className='aspect-[4/2] object-cover w-[100vw]'  src={image}/>
          </div>
        })}
      </div>
      {/* <div ref={carouselRef}  id='carousel' className='relative w-[100vw] flex  overflow-x-hidden'>
        {images.map((image)=>{
          return <div className='grow-0 shrink-0 basis-full'>
            <img className='aspect-[4/2] object-cover w-[100vw]' src={image}/>
          </div>
        })}
      </div> */}
      <div className='flex justify-between'>
        <button className='bg-slate-200/[0.1] text-zinc-400 font-bold p-3 text-[20px] absolute top-[50%] -translate-y-1/2'  onClick={handlePrev}>&#5176;</button>
        <button className='bg-slate-200/[0.1] text-zinc-400 font-bold p-3 text-[20px] absolute top-[50%] -translate-y-1/2 left-[100%] -translate-x-[100%]'  onClick={handleNext}>&#5171;</button>
      </div>
      <button onClick={()=>{
        navigate('page/1')
      }} className='my-2 w-[100vw] text-[32px] text-slate-700 bg-slate-200 top-[80%] left-[70%] px-6 '>
        Rent Cars..
      </button>
    </div>
  )
}

export default Home
