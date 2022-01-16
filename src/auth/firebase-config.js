//! kullanıcı verilerini firebase içerisinde tutacağız.
//? login için firebase authentication içerisinde sadece email/password enable ettik

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAxeiGTbqSYajnpDv4cdV5LpUKXwhH6HNI',
  authDomain: 'movie-app-63409.firebaseapp.com',
  projectId: 'movie-app-63409',
  storageBucket: 'movie-app-63409.appspot.com',
  messagingSenderId: '405222890798',
  appId: '1:405222890798:web:e9980b4048dee9ca32eebf'
};

const app = initializeApp(firebaseConfig);

//! react projesini bağladık başka yerlerde kullanmak için export ediyoruz.
export const auth = getAuth(app);
