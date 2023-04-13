import React from 'react';
import testData from './TestData.js';
import MovieList from './MovieList.jsx';
// import MovieObj from './MovieObj.jsx';
import MovieSubmit from './MovieSubmit.jsx';
import SearchList from './SearchList.jsx';
import WatchedButton from './WatchedButton.jsx';

const {useState, useEffect} = React;


const App = ({props}) => {

  // useStates
// need master list
  const [masterList, setMasterList] = useState([]);
  const [revisedList, setRevisedList] = useState(masterList);
  const [searchString, setSearchString] = useState(''); //search states
  const [addMovie, setAddMovie] = useState('');

  // const [movieState, setMovieState] = useState('');
  let timeout = null;
  useEffect(() => {
    console.log('this is a test')
    timeout = setTimeout(() => {
      if (searchString.length > 0) {
        setRevisedList(masterList.filter(
          movie => movie.title.toLowerCase().includes(searchString.toLowerCase())
          ));
      } else if (searchString.length === 0) {
        setRevisedList(masterList);
      }
    }, 300)

    return () => clearTimeout(timeout);
  }, [searchString]);

  useEffect(() => {
    setRevisedList(masterList);
    console.log(masterList)
  }, [masterList])

  //DEPRECATED HANDLERS
  //handlers
  // const searchHandler = (event) => {//Handle
  //   event.preventDefault();
  //   const filterStringPresence = (movie) => {
  //     // console.log(searchString, movie)
  //     if(movie.title.indexOf(searchString) !== -1) {
  //       return true
  //     }
  //   }
  //   if(searchString.length === 0) {
  //     return setRevisedList(masterList)
  //   } else {
  //     let listSearched = revisedList.filter(filterStringPresence);
  //     setRevisedList(listSearched)
  //   }
  // }


  //rest of APP
  return (
    <div>
      <header>
        <h1>
          Movie List
        </h1>
      </header>
      <div className="list-controller">
        <button onClick={() => {setRevisedList(masterList)}}>Return Home</button>

        <MovieSubmit addMovie={addMovie} setAddMovie={setAddMovie} masterList={masterList} setMasterList={setMasterList} setRevisedList={setRevisedList}/>
        <SearchList setSearchString={setSearchString}/>
        <WatchedButton setRevisedList={setRevisedList} masterList={masterList}/>
      </div>
        <MovieList masterList={masterList} setMasterList={setMasterList} revisedList={revisedList} />
    </div>
  )
};


export default App;