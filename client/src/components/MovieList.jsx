import React from 'react';
import MovieObj from './MovieObj.jsx';

const MovieList = ({masterList, setMasterList, revisedList}) => {

  return (
  <div className="movie-list">
      {
        masterList.length === 0 ? 'List is empty, please add movies.'
        : revisedList.length > 0 ? revisedList.map((movieItem, index) => (<MovieObj movie={movieItem} key={index} masterList={masterList} setMasterList={setMasterList}/>))
        : 'Movie not found. Please try again'
      }
  </div>
  )
};




export default MovieList;