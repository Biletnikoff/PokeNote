import React, { Component } from 'react';
import NoteEntry from './NoteEntry.js';

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
