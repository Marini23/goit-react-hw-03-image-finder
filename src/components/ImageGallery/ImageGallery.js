import React from 'react';

import { ImageCalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList className="gallery">
      {images.map(image => (
        <ImageCalleryItem
          img={image.webformatURL}
          largeImageURL={image.largeImageURL}
          alt={image.tags}
          key={image.id}
        />
      ))}
    </ImageGalleryList>
  );
};
