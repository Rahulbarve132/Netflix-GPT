import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
      <div className="absolute bg-black -z-10">
       
       <img
         className="sm:block hidden BackGround-picture"
         src={BG_URL}
         alt="backgroud"
       />
       </div>
      <GptSearchBar/>
      <GptMoviesSuggestions/>
    </div>
  )
}

export default GptSearch
