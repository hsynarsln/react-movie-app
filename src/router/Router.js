import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import FavouriteMovie from '../pages/FavouriteMovie';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Register from '../pages/Register';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/favourite' element={<FavouriteMovie />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
