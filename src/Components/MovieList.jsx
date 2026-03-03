import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import HrMovieCard from './HrMovieCard';

function MovieList({genreId, index_}) {
  // const screenWidth = window.innerWidth;
  const elementRef=useRef();
  const [movieList, setMovieList]=useState([])
  useEffect(()=>{
    getMovieByGenreId();
  },[])
  const getMovieByGenreId=()=>{
    GlobalApi.getMovieByGenreId(genreId).then(resp=>{
      setMovieList(resp.data.results)
    })
  }
   const sliderRight=(element)=>{
    element.scrollLeft+=500;
  }
  const sliderLeft=(element)=>{
    element.scrollLeft-=500;
  }
  return (
    <div className='relative'>
    <HiChevronLeft className={`hidden text-[50px] text-white font-bold top-0 p-2 z-10 cursor-pointer md:block absolute  ${index_%3==0?'mt-[60px]':'mt-[170px]'}`} onClick={()=>{
    sliderLeft(elementRef.current)}}/>
    <div className='flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-5 scroll-smooth' ref={elementRef}>
      {movieList.map((item,index)=>(
        <> 
        {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item}/>}
        </>
      ))}
    </div>
    <HiChevronRight className={`hidden md:block text-white font-bold text-[50px] absolute p-2 z-10 top-0 cursor-pointer right-0 md:block ${index_%3==0?'mt-[60px]':'mt-[170px]'}`} onClick={()=>{sliderRight(elementRef.current)}}/>
    </div>
  )
}

export default MovieList