import React from 'react';
import {getImage} from '../lib/searchMovies.js';


const MovieListEntry = ({movie, masterList, setMasterList}) => {

  let imageURl = getImage((data) => {
    return `${data.base}${data.size}${movie.image}`
  });

  const toggle = () => {
    let check = masterList.slice()
    for(let i = 0; i < check.length; i++) {
      if(check[i].title === movie.title){
        check[i].watched = !check[i].watched
      }
    }
    setMasterList(check)
  }

  return (//TRY TO DO NO WORK IN HERE
    <div>
      <form>
        <div>{movie.title}
          <button
            type="button"
            onClick={toggle}>
              {movie.watched ? 'Watched' : "To Watch"}
          </button>
          <div className="image">
            <img src={imageURL}></img>
          </div>
        </div>
      </form>

    </div>
  )
}
export default MovieListEntry;