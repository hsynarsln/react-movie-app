import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import { AuthContext } from '../context/AuthContext';

const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f&query=';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { currentUser } = useContext(AuthContext);
  const movie = useSelector(state => state.addMovieReducer);
  // console.log(movie);

  // console.log('main movie', movie);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = API => {
    fetch(API)
      .then(res => res.json())
      .then(res => setMovies(res.results));
  };
  // console.log(movies);

  const handleSubmit = e => {
    e.preventDefault();
    //*searchTerm and currentUser handled
    if (searchTerm && currentUser) {
      getMovies(SEARCH_API + searchTerm);
    } else {
      alert('Please  log in to search a movie.');
    }
    setSearchTerm('');
  };

  return (
    <Container>
      <form className='search' onSubmit={handleSubmit}>
        <input type='search' className='search-input' placeholder='Search a movie...' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <Player type='submit'>Search</Player>
      </form>
      <div className='movie-container'>
        {movies.map(movie => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
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

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

export default Main;
