import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import {  addUpComingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = ()=> {
    const dispatch = useDispatch();
    const UpComingMovies = useSelector((store) => store.movies.upComingMovies);

  const getUpcomingMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
    const json = await data.json();
    
    dispatch(addUpComingMovies(json.results))
  };

  useEffect(()=>{
    !UpComingMovies &&
    getUpcomingMovies();
  },[ ])
}

export default useUpcomingMovies ;