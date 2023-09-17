import React from 'react';
import { Modal, Overlay } from './Modal.styled';

export const Modal = (img, alt) => {
  return (
    <Overlay>
      <Modal>
        <img src={img} alt={alt} />
      </Modal>
    </Overlay>
  );
};
