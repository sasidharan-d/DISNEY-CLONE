import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"

function MovieCard({movie}) {
  return (
    <>
      <img src={IMAGE_BASE_URL+movie.poster_path} alt="Poster" className='w-[110px] h-auto md:w-[250px] h-[300px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in ' />
    </>
  )
}

export default MovieCard