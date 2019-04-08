import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import Button from './Button';

const Results = ({
  productsData,
  soldItemsVisible,
  toggleSoldItemsVisible,
  likesArr,
  toggleLike,
}) => {
  const productsArr = productsData.map((product) => {
    const {
      img: src,
      title,
      brand,
      size,
      price,
      sold,
    } = product;

    const active = likesArr.includes(title);

    return (
      <Product
        src={src}
        title={title}
        brand={brand}
        size={size}
        price={price}
        sold={sold}
        soldItemsVisible={soldItemsVisible}
        toggleLike={toggleLike}
        active={active}
        key={title}
      />
    );
  });

  return (
    <div className="results-container container">
      <div>
        <h2 className="h3">Results:</h2>
        <Button
          soldItemsVisible={soldItemsVisible}
          toggleSoldItemsVisible={toggleSoldItemsVisible}
        />
      </div>
      <div className="row">
        { productsArr }
      </div>
    </div>
  );
};

Results.propTypes = {
  productsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  soldItemsVisible: PropTypes.bool.isRequired,
  toggleSoldItemsVisible: PropTypes.func.isRequired,
  likesArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleLike: PropTypes.func.isRequired,
};

export default Results;
