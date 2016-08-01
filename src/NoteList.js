import React, { Component } from 'react';
import NoteEntry from './NoteEntry.js';
const testList = [["awesome pokemon note", "long ago, pokemon existed in harmony. Until one day they all start attack each other. Lulz"],["Vaporeon is super overpowered","Speculation of this could be...well absolutely nothing. Niantic are a bunch of trolls. They better nerf that fucker soon."]];

export default class NoteList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <ul>
        {
          this.props.notes.map((note, index)=> {
            console.log(note.id);
            return <NoteEntry note={note}
                    index={index}
                    key={note.id}
                    edit={this.props.edit}
                    remove={this.props.remove}
                    type='view'/>
          })
      }
        </ul>
      </div>
    )
  }
}
