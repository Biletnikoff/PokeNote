import React, { Component } from 'react';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';
class Button extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      isShowingModal: false,
      newNote:[]
    }

  }
  handleClick = () => this.setState({isShowingModal: true})
  handleCloseAdd = () => {
    let noteTitle = document.getElementById("newnotename").value
    let newnotecontent = document.getElementById("newnotecontent").value
    console.log('WTF')
    if( noteTitle && newnotecontent ) {

      this.props.save([noteTitle, newnotecontent])
    }
    this.setState({isShowingModal: false})

  }
  handleClose = () => this.setState({isShowingModal: false});

  render() {
    return (
      <div className='App-Button'>
      <button id='addNote' className='pokebutton footer button-grad' onClick={this.handleClick}>Add Note
    </button>
    {
    this.state.isShowingModal &&
    <ModalContainer onClose={this.handleClose} >
      <ModalDialog onClose={this.handleClose} style={{backgroundColor:'#F2F2F2'}}>
        <p className='text'>Set Note Name</p>
        <input className='note-name' id='newnotename'></input>
        <p className='text'>Content</p>
        <textarea className='note-content' id='newnotecontent'></textarea>
        <div>
          <button className='pokebutton button-grad' onClick={this.handleCloseAdd}>OK</button>
          <button className='cancel' onClick={this.handleClose}>CANCEL</button>
        </div>
      </ModalDialog>
    </ModalContainer>
    }
      </div>
    )
  }
}
 export default Button;
