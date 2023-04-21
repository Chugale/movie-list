import React from 'react';

const SearchList = ({masterList, searchInput, setSearchInput, setInput, setWatch}) => {
//master and setRevised

  const handleSearch = (event) => { //doesn't work yet
    // if (!event.target.value) return masterList
      setSearchInput(event.target.value);
      // setInput(searchInput)

  }


  return (  //TRY TO DO NO WORK IN HERE
    <div>
      <form
        className="search"
        onSubmit={(event) => {
          event.preventDefault()
          setInput(searchInput)
          setSearchInput('')
          event.target.reset() //clears the search bar
          }}>
        <button
          type="button"
          onClick={(event) => setWatch(true)}>
          Watched
        </button>
        <button
          type="button"
          value="false"
          onClick={(event) => setWatch(false)}>
          To Watch
        </button>
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={handleSearch}>
        </input>
        <button type="submit">Search</button>
      </form>

    </div>
  )
}
export default SearchList;