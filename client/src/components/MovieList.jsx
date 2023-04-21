import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';




const MovieList = ({masterList, setMasterList, input, watch}) => {

  const inputHandler = (masterList, watch) => {
    if(watch.length === 0) {


    }

  }
    const alteredList = masterList
      .filter((movie) => movie.title.toLowerCase().includes(input.toLowerCase()))
      .filter((movie) => {
        if (watch === '') {
          return movie
        } else {
          return watch === movie.watched
        }
      })
      .map((movieObj, ind) =>
        <MovieListEntry
          masterList={masterList}
          setMasterList={setMasterList}
          key={ind}
          movie={movieObj}/>)

  return ( //TRY TO DO NO WORK IN HERE
    <div>
      {
        alteredList.length !== 0 ? alteredList
        : input.length !== 0 ? <div>Cannot find movie.</div>
        :<div>Need to add movie.</div>
      }
    </div>
  )
}

export default MovieList;