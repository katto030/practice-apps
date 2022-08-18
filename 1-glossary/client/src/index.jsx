import React from "react";
import { render } from "react-dom";
import Search from './components/search.jsx'
import axios from 'axios';
import GlossaryList from './components/glossaryList.jsx';
import AddForm from './components/addForm.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      currList: [],
      word: ''
    }
    this.definitionChange = this.definitionChange.bind(this);
    this.wordChange = this.wordChange.bind(this);
    this.searchClick = this.searchClick.bind(this);
    this.getAll = this.getAll.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  wordChange (event) {
    this.setState({
      word: event.target.value
    })
  }

  definitionChange(event) {
    this.setState({
      definition: event.target.value
    })
  }

  getAll() {
    axios.get('/glossary')
    .then((res) => {
      this.setState({
        list: res.data,
        currList: res.data
      });
      console.log('--data--', this.state.list);
    })
    .catch((err) => console.error(err))
  }

  searchClick() {
    event.preventDefault();
    this.getAll();
    axios.get('/glossary/word', {params: {word: this.state.word}})
    .then((res) => {
      document.getElementById("search").reset();
      this.setState({
        currList: res.data
      });
    })
  }

  formSubmit() {
    event.preventDefault();
    axios.post('/glossary', {word: this.state.word, definition: this.state.definition})
    .then(() => {
      document.getElementById("add").reset();
      this.getAll();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  delete(word) {
    console.log('delete')
    axios.delete('/glossary', {data: {word: word}})
    .then(() => this.getAll())
    .catch((err) => console.error(err))
  }

  edit(word) {
    var def = document.getElementById(word)
    def.setAttribute('contenteditable', 'true');
    def.style['border-color'] = "pink";
    axios.put('/glossary', {word: word, definition: def.innerText})
    .then(() => this.getAll())
    .catch((err) => console.error(err))
  }

  render() {
    return (
      <div id="app">
        <div className="header"><p onClick={() => this.getAll()} className="title">Glossary List</p></div>
        <Search click={this.searchClick} change={this.wordChange} />
        <AddForm wordChange={this.wordChange} defChange={this.definitionChange} submit={this.formSubmit}/>
        <GlossaryList getAll={this.getAll} delete={this.delete} list={this.state.currList} />
      </div>
    )
  }
}


render(
  <App />,
  document.getElementById("root")
);
