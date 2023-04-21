import React from 'react';

const MovieListEntry = ({movie, masterList, setMasterList}) => {

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
        </div>
      </form>

    </div>
  )
}
export default MovieListEntry;