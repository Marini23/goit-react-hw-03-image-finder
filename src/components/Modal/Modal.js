import React from 'react';
import { createPortal } from 'react-dom';
import { ModalImg, Overlay } from './Modal.styled';

const modalRoot = document.querySelector(`#modal-root`);

export const Modal = ({ isClose, dataModal }) => {
  return createPortal(
    <Overlay onClick={isClose}>
      <ModalImg>
        <img src={dataModal.largeImageURL} alt={dataModal.alt} />
      </ModalImg>
    </Overlay>,
    modalRoot
  );
};
