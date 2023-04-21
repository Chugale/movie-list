import React from 'react';
import MovieList from './MovieList.jsx';
import MovieSubmit from './MovieSubmit.jsx';
import SearchList from './SearchList.jsx';

const {useState} = React;

//goal is to only have imports, useStates and return all passing usestates in
const App = () => {
  const [masterList, setMasterList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [movieInput, setMovieInput] = useState('');
  const [input, setInput] = useState('');
  const [watch, setWatch]=  useState('');
  return ( //TRY TO DO NO WORK IN HERE  return
    <>
      <header>
        <h1>Movie List v2</h1>
      </header>

      <button onClick={(e) => {
        setInput('')
        setWatch('')
      }
      }>Home Page</button>

      <div>
         <MovieSubmit
          setMasterList={setMasterList}
          masterList={masterList}
          setMovieInput={setMovieInput}
          movieInput={movieInput}/>


        <SearchList
          masterList={masterList}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setInput={setInput}
          searchInput={searchInput}
          setWatch={setWatch}
          />
        <MovieList
          setMasterList={setMasterList}
          masterList={masterList}
          input={input}
          watch={watch}
          />
      </div>
    </>
  )
}




export default App;