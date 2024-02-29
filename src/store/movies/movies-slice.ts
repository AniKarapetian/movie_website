


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MovieDTO } from '../../components/gallery/types';
import { API_URL } from '../../common/constants';

interface MoviesState {
  movies: MovieDTO[];
  filteredMovies: MovieDTO[];
  movie: MovieDTO | null;
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
  movie: null,
  filteredMovies: [],
  loading: false,
  error: null,
};

export const getMoviesAsync = createAsyncThunk('movies/getMovies', async () => {
  const response = await fetch(`${API_URL}/movies`);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const movies = await response.json();
  return movies;
});

export const addMovieAsync = createAsyncThunk('movies/addMovie', async (newMovie: MovieDTO) => {
  const response = await fetch(`${API_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMovie),
  });
  if (!response.ok) {
    throw new Error('Failed to add movie');
  }
  const movie = await response.json();
  return movie;
});


export const getMovieByIdAsync = createAsyncThunk('movies/getMovieById', async (movieId: string) => {
  const response = await fetch(`${API_URL}/movies/${movieId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch movie');
  }
  const movie = await response.json();
  return movie;
});


const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    filterMovies: (state, {payload}) => {
      state.filteredMovies = state.movies.filter(movie => 
        movie.genres.includes(payload)|| payload === ''
      );
    },
    sortMoviesByYearAsc: state => {
      state.filteredMovies.sort((a, b) => a.year - b.year);
    },
    sortMoviesByYearDesc: state => {
      state.filteredMovies.sort((a, b) => b.year - a.year);
    },
    sortMoviesByRatingAsc: state => {
      state.filteredMovies.sort((a, b) => a.rating - b.rating);
    },
    sortMoviesByRatingDesc: state => {
      state.filteredMovies.sort((a, b) => b.rating - a.rating);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMoviesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.movies = action.payload;
      })
      .addCase(getMoviesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch movies';
      })
      .addCase(addMovieAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.movies.push(action.payload);
      })
      .addCase(addMovieAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to add movie';
      })
      .addCase(getMovieByIdAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovieByIdAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.movie = action.payload;
      })
      .addCase(getMovieByIdAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch movie';
      });
  },
});


export const {filterMovies, sortMoviesByYearAsc, sortMoviesByYearDesc, sortMoviesByRatingAsc, sortMoviesByRatingDesc} = moviesSlice.actions;
export default moviesSlice.reducer;
