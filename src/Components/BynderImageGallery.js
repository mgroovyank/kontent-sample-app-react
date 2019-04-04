import React from 'react';

const BynderImageGallery = props => {
  const images = props.images;
  const value = images && images.value && JSON.parse(images.value);

  if (!value || !value.length) {
    return null;
  }

  return (
    <>
      <h2>Image gallery</h2>
      <div className="image-gallery">
        {value.map(image => (
          <div className="image-gallery__item" tabIndex="-1">
            <img src={image.webUrl} alt={image.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BynderImageGallery;
