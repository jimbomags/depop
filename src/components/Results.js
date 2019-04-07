import React from 'react';
import Product from './Product';
import Button from './Button';

const Results = () => {
  let productsArr = [];
  for (let i = 0; i < 6; i++) {
    productsArr.push(
      <Product
        src="https://picsum.photos/500/?image=0"
        title="Polo Shirt"
        brand="Ralph Lauren"
        size="XL"
        price="21"
      />,
    );
  }
  return (
    <div className="results-container container">
      <div>
        <h2 className="h3">Results:</h2>
        <Button />
      </div>
      {productsArr}
    </div>
  );
};

export default Results;
