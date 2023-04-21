import React from 'react';

const MovieSubmit = ({setMasterList, masterList, setMovieInput, movieInput}) => {

  const handleSubmit = (event) => { //when submit is hit
    event.preventDefault()
    const movieItem={title: movieInput, watched: false}
    setMasterList([...masterList, movieItem])
    event.target.reset()
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Add movie title here..."
        onChange={(event) => setMovieInput(event.target.value)}>
        </input>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default MovieSubmit;