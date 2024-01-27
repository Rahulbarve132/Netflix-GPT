import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <>
    <div className="fixed bg-black -z-10">
       
       <img
         className=" BackGround-picture h-screen object-cover w-screen"
         src={BG_URL}
         alt="backgroud"
       />
       </div>
    <div className=''>
      
      <GptSearchBar/>
      <GptMoviesSuggestions/>
    </div>
    </>
  )
}

export default GptSearch
