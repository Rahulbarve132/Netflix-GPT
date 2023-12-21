import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState:{
        nowPlayingMovies: null ,
        trailerVideo: null ,
        PopularMovies : null ,
        topRatedMovies : null ,
        upComingMovies : null ,
    },
    reducers:{
        addNowPlayingMoives :(state ,action) =>{
            state.nowPlayingMovies = action.payload ;
        },
        addPopularMovies :(state ,action) =>{
            state.PopularMovies = action.payload ;
        },
        addTopRatedMovies :(state ,action) =>{
            state.topRatedMovies = action.payload ;
        },
        addUpComingMovies :(state ,action) =>{
            state.upComingMovies = action.payload ;
        },
        addTrailerVideo : (state, action)=>{
            state.trailerVideo = action.payload ;
        }
    },
});

export const {addNowPlayingMoives, addTrailerVideo, addPopularMovies ,addTopRatedMovies ,addUpComingMovies} = moviesSlice.actions ;

export default moviesSlice.reducer ;