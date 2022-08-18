import React from 'react';

var AddForm = (props) => {
  return (
    <div>
      <h4>Add a word to glossary!</h4>
      <form id="add-form" onSubmit={() => props.submit()}>
        <label> enter a word*:
          <input type="text" required onChange={(e) => props.wordChange(e)} />
        </label>
        <label> enter definition*:
          <input type="text" required onChange={(e) => props.defChange(e)} />
        </label>
        <input type="submit" value="Add"></input>
      </form>
    </div>
  )
}

export default AddForm;