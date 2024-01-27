import React from 'react'
import MovieList from './MovieList'
// import {useSelector} from "react-redux"
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);

  return (
    <div className='bg-black'>
      <div className='relative z-20 pl-4 md:pl-12 mt-0 md:-mt-40'>
      <MovieList title={ "Now Playing"} movies= {movies.nowPlayingMovies}/>
      <MovieList title={ "Top Rated "} movies= {movies.topRatedMovies}/>
      <MovieList title={ "Popular"} movies= {movies.PopularMovies}/>
      <MovieList title={ "Upcoming movies"} movies= {movies.upComingMovies}/>
     
      </div>
    </div>
  )
}

export default SecondaryContainer
