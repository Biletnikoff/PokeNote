import React, { Component } from 'react';

import Button from './Button.js';
import logo from './Pokeball.png';
import NoteList from './NoteList.js'
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.state = {
      items: this.props.store.load(),
    }

  }
  save(notes) {
    let newState = this.state.items.slice()
    newState.push(notes);
    this.props.store.save(newState);
    this.setState({items: newState});
  }

  edit(updatedNote, updateIndex) {
    let theSaves = this.state.items.map(function(note, index) {
      if (updateIndex === index) {
        return [note[0], updatedNote];
      }
      return note;
    });

    this.props.store.save(theSaves);
    this.setState({ items: theSaves });
  }

  remove(selectedIndex) {
    let theRemove = this.state.items.filter(function(data, index) {
      return selectedIndex !== index;
    });
    this.props.store.save(theRemove);
    this.setState({ items: theRemove});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>PokeNote</h2>
        </div>
        <NoteList
        notes={this.state.items}
        save={this.save}
        edit={this.edit}
        remove={this.remove}
        />
        <Button
        save={this.save}
        />
      </div>
    );
  }
}

export default App;
