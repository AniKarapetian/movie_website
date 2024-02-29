import { RootState } from '../types';

export const moviesSelector = (state: RootState) => state.movies.movies;
export const movieSelector = (state: RootState) => state.movies.movie;
export const filteredMovieSelector = (state: RootState) => state.movies.filteredMovies;