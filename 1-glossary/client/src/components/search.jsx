import React from "react";

var Search = (props) => {
  var focus = () => {
    document.getElementById('search-form').setAttribute('placeholder', '');
  };


  return (
    <div className="search">
        <form id="search">
          <div id="search-bar">
            <span onClick={() => props.click()}><i className="fa-solid fa-magnifying-glass"></i></span>
            <input id="search-form" onChange={(e) => props.change(e)} type="text" placeholder="Search your glossary..."></input>
            <span><i className="fa-solid fa-microphone"></i></span>
          </div>
        </form>
    </div>
  )
}

export default Search;