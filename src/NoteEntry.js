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
    handleRemove = () => {
      this.setState({isShowingModal: false})
      console.log('in')
      this.props.remove(this.props.index);
    }

    render() {
      return (
        <div className='note-display'>
          <li onClick={this.handleClick}>{this.props.note[0]}</li>
         {
           this.state.isShowingModal &&
            <ModalContainer onClose={this.handleCloseEscape}>
              <ModalDialog  onClose={this.handleCloseEscape} style={{backgroundColor:'#F2F2F2', width:'88%', height:'65%', marginLeft:'1%', paddingBottom:'10%'}}>
                <p className='text'>{this.props.note[0]}</p>
                <textarea className='note-content' id={`modaledit${this.props.index}`} defaultValue={this.props.note[1]}></textarea>
                <button onClick={this.handleClose} className='button-grad pokebutton circle-button'>✓</button>
                <button onClick={this.handleRemove} className='button-grad pokebutton' style={{margin:'32%'}}>  delete  </button>
              </ModalDialog>
            </ModalContainer>
          }
        </div>
          )
    }
}
