import React from 'react';

import { ImageCalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images, onOpenModal }) => {
  const { largeImageURL, alt } = images;
  return (
    <ImageGalleryList>
      {images.map(image => (
        <ImageCalleryItem
          onClick={() => onOpenModal(largeImageURL, alt)}
          key={image.id}
          onOpenModal={onOpenModal}
          largeImageURL={image.largeImageURL}
          img={image.webformatURL}
          alt={image.tags}
        />
      ))}
    </ImageGalleryList>
  );
};
