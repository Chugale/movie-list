import React from 'react';

const MovieSubmit = ({addMovie, setAddMovie, masterList, setMasterList, setRevisedList}) => {
  // const [entry, setEntry] = useState("");
  return (
    <div>
      <input id="add-bar" type="text" placeholder="Add movie title here"
      onChange={(event) =>{
        setAddMovie(event.target.value)}}/>

      <button className="add-button" type="submit" onClick={() => {
        let input = document.getElementById('add-bar');
        setMasterList([...masterList, {title: addMovie, watched: false}]);
        setAddMovie('');
        input.value = '';
      }}> Add </button>
    </div>
  )
};

export default MovieSubmit;