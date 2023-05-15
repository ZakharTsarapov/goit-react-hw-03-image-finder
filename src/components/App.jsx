import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {

    const { showModal } = this.state
    return (
      <div>
        <button type='button' onClick={this.toggleModal}>открыть модалку</button>
        {showModal && <Modal onClose={this.toggleModal}></Modal>}
      </div>
    )
  }
}
