import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ soldItemsVisible, toggleSoldItemsVisible }) => {
  const text = soldItemsVisible ? 'Hide Sold Items' : 'Show Sold Items';
  return (
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => toggleSoldItemsVisible(!soldItemsVisible)}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  soldItemsVisible: PropTypes.bool.isRequired,
  toggleSoldItemsVisible: PropTypes.func.isRequired,
};

export default Button;
