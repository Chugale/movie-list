import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
// import MovieList from './components/MovieList.jsx';
// import MovieTitle from './components/MovieTitle.jsx';

var movies = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
];


ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.createRoot('root').render(<app/>)