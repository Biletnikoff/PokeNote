import React, { Component } from 'react';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';

import Modal from './Components/Modal.js';

export default class NoteEntry extends Component {
    constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.state = {
        isShowingModal: false,
      }
    }

    handleClick = () => {
      this.setState({isShowingModal: true});
    }
    handleCloseEscape = () =>{
      this.setState({isShowingModal: false})
    }

    handleClose = () => {
      let newnotecontent = document.getElementById(`modaledit${this.props.index}`).value
      this.props.edit(newnotecontent, this.props.index);
      this.setState({isShowingModal: false });
    }

    handleModalType = (type) => {
      if (this.props.show) {
        this.setState({isShowingModal: true})
      }
    }
    handleEdit = () => {
      this.setState({showEdit: true});
      console.log('working');
    }
    // componentWillReceiveProps() {
    //  this.handleModalType();
    // }
    // componentShouldUpdate() {
    //   this.props.handleShow()
    // }


      render() {
        let content;
        let button;
        if (this.props.type === 'view') {
          content = <textarea className='note-content' id={`modaledit${this.props.index}`} defaultValue={this.props.note[1]}></textarea>
          button = <button onClick={this.handleClose} className='button-grad pokebutton circle-button'>x</button>;
        } else {

          // edit
          content = (
            <div>
            <input className='note-name'></input>
            <textarea className='note-content'>{this.props.note[1]}</textarea>
            <input className='note-name'></input>
            <p className='text'>Content</p>
            </div>
          )
          button = (
            <div>
            <button className='pokebutton button-grad' onClick={this.handleClose}>OK</button>
            <button className='cancel' onClick={this.handleClose}>CANCEL</button>
            </div>
          )
        }

      return (
        <div>
          <li onClick={this.handleClick}>{this.props.note[0]}</li>
         {
           this.state.isShowingModal &&
            <ModalContainer onClose={this.handleCloseEscape}>
              <ModalDialog  onClick={this.handleCloseEscape} style={{backgroundColor:'#F2F2F2'}}>
                <p className='text'>{this.props.note[0]}</p>
                <div>
                {content}
                {button}
                </div>
              </ModalDialog>
            </ModalContainer>
          }
        </div>
          )
    }
}
