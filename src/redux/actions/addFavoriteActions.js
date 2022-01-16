import { ADD_MOVIE, GET_MOVIE, REMOVE_MOVIE } from '../types/addFavoriteTypes';

export const addMovie = payload => {
  return {
    type: ADD_MOVIE,
    payload
  };
};

export const removeMovie = payload => {
  return {
    type: REMOVE_MOVIE,
    payload
  };
};

export const getMovie = payload => {
  return {
    type: GET_MOVIE,
    payload
  };
};

export const removeMovieApi = id => {
  return dispatch => {
    dispatch(removeMovie(id));
  };
};

export const addMovieApi = payload => {
  return dispatch => {
    dispatch(addMovie(payload));
  };
};

export const getMovieApi = () => {
  return dispatch => {
    const data = JSON.parse(localStorage.getItem('favouriteMovies'));
    // console.log(data);

    dispatch(getMovie(data));
  };
};
