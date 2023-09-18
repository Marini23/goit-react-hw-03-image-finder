import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalImg, Overlay } from './Modal.styled';

const modalRoot = document.querySelector(`#modal-root`);

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.isCloseEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.isCloseEscape);
  }
  isCloseEscape = e => {
    if (e.code === `Escape`) {
      this.props.isClose();
    }
  };
  render() {
    const { isClose, dataModal } = this.props;
    return createPortal(
      <Overlay onClick={isClose}>
        <ModalImg>
          <img src={dataModal.largeImageURL} alt={dataModal.alt} />
        </ModalImg>
      </Overlay>,
      modalRoot
    );
  }
}

// export const Modal = ({ isClose, dataModal }) => {
//   return createPortal(
//     <Overlay onClick={isClose}>
//       <ModalImg>
//         <img src={dataModal.largeImageURL} alt={dataModal.alt} />
//       </ModalImg>
//     </Overlay>,
//     modalRoot
//   );
// };
