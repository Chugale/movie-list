import React from 'react';

const WatchedButton = ({setRevisedList, masterList}) => {


  let selectionToggle = (button) => {

    let buttonClick = {
      'watched': document.getElementById('watched'),
      'unwatched': document.getElementById('unwatched'),
    }

    for(let key in buttonClick) {
      if (key === button) {
        buttonClick[key].classList.add('selected')
      }
      buttonClick[key].classList.remove('selected')
    }
  }

  return (
    <div>
      <button id="watched" className="watched-button" onClick = {(event) => {
        selectionToggle('watched');
        setRevisedList(masterList.filter((movie) => {movie.watched}))
      }}>Watched</button>

      <button id="unwatched" className="watched-button" onClick = {(event) => {
        selectionToggle('unwatched');
        setRevisedList(masterList.filter((movie) => {!movie.watched}))
      }}>To Watych</button>
    </div>
  )
}



export default WatchedButton;