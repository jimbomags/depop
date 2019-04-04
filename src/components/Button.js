import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ soldItemsVisible }) => {
  const text = soldItemsVisible ? 'Hide Sold Items' : 'Show Sold Items';
  return (
    <button
      type="button"
      className="btn btn-secondary"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  soldItemsVisible: PropTypes.bool.isRequired,
};

export default Button;
