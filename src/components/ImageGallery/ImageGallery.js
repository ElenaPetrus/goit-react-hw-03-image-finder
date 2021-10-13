import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images, onOpen }) {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id} onClick={onOpen} />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export { ImageGallery };
