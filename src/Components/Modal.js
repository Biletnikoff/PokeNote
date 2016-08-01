import React, { Component } from 'react';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleModalType = this.handleModalType.bind(this);
    this.state = {
      isShowingModal: false,
      showEdit: true
    }
  }

  handleClick = () => {
    this.setState({isShowingModal: true});
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
  componentWillReceiveProps() {
   this.handleModalType();
  }
  componentShouldUpdate() {
    this.props.handleShow()
  }

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
    this.state.isShowingModal &&
      <ModalContainer >
        <ModalDialog  style={{backgroundColor:'#F2F2F2'}}>
          <p className='text'>{this.props.note[0]}</p>
          <div>
          {content}
          {button}
          </div>
        </ModalDialog>
      </ModalContainer>
    )
  }
}
