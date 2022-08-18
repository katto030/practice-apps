import React from "react";

var Search = (props) => {
  return (
    <div>
      <form id="search-form">
        <label>
          Search a term:
          <input onChange={(e) => props.change(e)}type="text"></input>
        </label>
        <input onClick={() => props.click()}type="submit" value="Search!"></input>
      </form>
    </div>
  )
}

export default Search;