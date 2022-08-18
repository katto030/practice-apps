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
      btn.innerText = 'edit';
      btn.style['background-color'] = 'rgb(243, 243, 243)';
    } else {
      def.setAttribute('contenteditable', 'true');
      def.style['border-color'] = "pink";
      btn.innerText = 'save';
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
        <div><h4>{this.props.word.word}: </h4></div>
        <div><h4 className="edit-box"contentEditable="false" id={this.props.word.word}>{this.props.word.definition}</h4></div>
        <div>
          <button id={`${this.props.word.word}-btn`}onClick={() => this.edit(this.props.word.word)}>edit</button>
          <button onClick={() => this.props.delete(props.word.word)}>delete</button>
        </div>
      </div>
    )
  }
}








// var GlossaryListEntry = (props) => {
//   return (
//     <div className="entry">
//       <div><h4>{props.word.word}: </h4></div>
//       <div><h4 className="edit-box"contentEditable="false" id={props.word.word}>{props.word.definition}</h4></div>
//       <div>
//         <button onClick={() => props.delete(props.word.word)}>delete</button>
//         <button onClick={() => props.edit(props.word.word)}>edit</button>
//       </div>
//     </div>
//   )
// }

export default GlossaryListEntry;