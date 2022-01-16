import React, { useEffect } from 'react';
import { TiDelete } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getMovieApi, removeMovieApi } from '../redux/actions/addFavoriteActions';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const FavouriteMovie = () => {
  const dispatch = useDispatch();
  const movie = useSelector(state => state.addMovieReducer);
  // console.log('movie', movie);

  useEffect(() => {
    dispatch(getMovieApi());
  }, [dispatch]);

  const setVoteClass = vote => {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  // console.log(movie);

  return (
    <Container>
      <div className='movie-container'>
        {movie === null ? (
          <h3 style={{ marginTop: '5rem' }}>No added movie</h3>
        ) : (
          movie.map(item => {
            const { title, poster_path, vote_average, id } = item;
            return (
              <div className='movie' key={id}>
                <h2 className='position-absolute'>
                  <TiDelete color='red' size={50} style={{ marginLeft: '250px', cursor: 'pointer' }} onClick={() => dispatch(removeMovieApi(id))} />
                </h2>
                <img src={IMG_API + poster_path} alt={title} />
                <div className='movie-info'>
                  <h3>{title}</h3>
                  <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 70px);
  overflow-x: hidden;
  display: block;
  margin-top: 70px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default FavouriteMovie;
