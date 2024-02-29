import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies/movies-slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './types';

const store = configureStore({
  reducer: {
    movies: moviesReducer
  },
});

export default store;


export const useAppDispatch: () => AppDispatch = useDispatch;