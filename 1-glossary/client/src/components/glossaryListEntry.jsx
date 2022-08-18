import React from 'react';
import axios from 'axios';

class GlossaryListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.edit = this.edit.bind(this);
  }

  edit(word) {
    var def = document.getElementById(word);
    var btn = document.getElementById(`${word}-btn`);
    if (this.state.clicked) {
      def.setAttribute('contenteditable', 'false');
      def.style['border-color'] = "white";
      btn.innerText = 'Edit';
      btn.style['background-color'] = 'rgb(243, 243, 243)';
    } else {
      def.setAttribute('contenteditable', 'true');
      def.style['border-color'] = "pink";
      btn.innerText = 'Save';
      btn.style['background-color'] = 'pink';
    }

    axios.put('/glossary', {word: word, definition: def.innerText})
    .then(() => {
      this.setState({
        clicked: !this.state.clicked
      });
      this.props.getAll();
    })
    .catch((err) => console.error(err))
  }

  render() {
    return (
      <div className="entry">
        <div className="text">
          <h4 id="word">{this.props.word.word}: </h4><h4 className="edit-box" contentEditable="false" id={this.props.word.word}>{this.props.word.definition}</h4>
        </div>
        <div className="entry-buttons">
          <i className="fa-regular fa-star fa-lg"></i>
          <button className="entry-button" id={`${this.props.word.word}-btn`} onClick={() => this.edit(this.props.word.word)}>Edit</button>
          <button className="entry-button" onClick={() => this.props.delete(this.props.word.word)}>Delete</button>
        </div>
      </div>
    )
  }
}

export default GlossaryListEntry;