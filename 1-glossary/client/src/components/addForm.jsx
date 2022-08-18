import React from 'react';

var AddForm = (props) => {
  return (
    <div className="add-form">
      <h4 id="add-form-title">Add a word to glossary!</h4>
      <form id="add" onSubmit={() => props.submit()}>
        <div id="add-form">
          <div className="input">
            <label> enter a word*:
              <input type="text" required onChange={(e) => props.wordChange(e)} />
            </label>
            <label> enter definition*:
              <input type="text" required onChange={(e) => props.defChange(e)} />
            </label>
          </div>
          <input id="add-button" type="submit" value="Add"></input>
        </div>
      </form>
    </div>
  )
}

export default AddForm;