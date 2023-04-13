import React from 'react';


//filterString
const SearchList = ({setSearchString}) => {

  // const [searchString, setSearchString] = useState("")

  return (
    <div >
      {/* <form> */}
        <input id="search-bar" type="text" placeholder="Search..."
        onChange={(event) => {setSearchString(event.target.value)}}/>
        <button className="search-button" type="submit" onClick={(event) => {
          let input = document.getElementById('search-bar');
          setSearchString(input);
        }}>Search!</button>
      {/* </form> */}
    </div>
  )
}

export default SearchList;