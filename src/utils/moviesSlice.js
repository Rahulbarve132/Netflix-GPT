import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState:{
        nowPlayingMovies: null ,
    },
    reducers:{
        addNowPlayingMoives :(state ,action) =>{
            state.nowPlayingMovies = action.payload ;
        },
    },
});

export const {addNowPlayingMoives} = moviesSlice.actions ;

export default moviesSlice.reducer ;