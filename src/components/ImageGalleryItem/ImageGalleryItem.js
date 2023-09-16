import React from 'react';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const ImageCalleryItem = ({ img, alt, largeImageURL }) => {
  return (
    <GalleryItem>
      <GalleryImage src={img} href={largeImageURL} alt={alt} />
    </GalleryItem>
  );
};
