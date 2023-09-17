import React from 'react';
import { ModalImg, Overlay } from './Modal.styled';

export const Modal = ({ isOpen, isClose, dataModal }) => {
  return (
    <Overlay>
      <ModalImg>
        <img src={dataModal.largeImageURL} alt={dataModal.alt} />
      </ModalImg>
    </Overlay>
  );
};
