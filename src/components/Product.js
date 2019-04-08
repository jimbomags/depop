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
  soldItemsVisible,
  toggleLike,
  active,
}) => {
  const className = sold ? 'image-container sold' : 'image-container';
  if (!sold || soldItemsVisible) {
    return (
      <div className="product">
        <div className={className}>
          <div className="sold-text">
            <p>SOLD</p>
          </div>
          <img src={src} alt={title} />
          <LikeIcon
            active={active}
            title={title}
            toggleLike={toggleLike}
          />
        </div>
        <div className="text-container">
          <p>{title}</p>
          <p>{brand}</p>
          <p>{`Size: ${size}`}</p>
          <p>{`£${price}`}</p>
        </div>
      </div>
    );
  }
  return null;
};

Product.propTypes = {
  sold: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  brand: PropTypes.string,
  size: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  soldItemsVisible: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

Product.defaultProps = {
  brand: 'N/A',
};

export default Product;
