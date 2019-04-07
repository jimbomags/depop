import React from 'react';
import PropTypes from 'prop-types';
import LikeIcon from './LikeIcon';

const Product = ({
  sold,
  src,
  title,
  brand,
  size,
  price,
}) => {
  const className = sold ? 'image-container sold' : 'image-container';
  return (
    <div className="product">
      <div className={className}>
        <div className="sold-text">
          <p>SOLD</p>
        </div>
        <img src={src} alt={title} />
        <LikeIcon />
      </div>
      <div className="text-container">
        <p>{title}</p>
        <p>{brand}</p>
        <p>{`Size: ${size}`}</p>
        <p>{`£${price}`}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  sold: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
