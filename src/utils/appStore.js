
import userReducer from "./userSlice" ;
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from "./moviesSlice" ;


const appStore = configureStore({
    reducer: {
        user: userReducer ,
        movies: movieReducer ,
    },
})

export default appStore ;