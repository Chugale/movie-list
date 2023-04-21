import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';


var movies = [
  { title: 'Mean Girls', watched: false },
  { title: 'Hackers', watched: false },
  { title: 'The Grey', watched: false },
  { title: 'Sunshine', watched: false },
  { title: 'Ex Machina', watched: false },
];


ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.createRoot('root').render(<app/>)