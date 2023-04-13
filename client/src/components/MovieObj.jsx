import React from 'react';

const MovieObj = ({movie, masterList, setMasterList}) => (
  <div className="movie-object">
    {movie.title}
    <button className={movie.watched ? 'watched-button selected' : 'watched-button'}
    onClick = {(event) => {setMasterList(masterList.map((currMovie) => {currMovie.title === movie.title ? {title: movie.title, watched: !movie.watched} : currMovie})
    )}}>{movie.watched ? 'Watched' : 'To Watch'}</button>
  </div>
);



export default MovieObj;