import React from 'react';
import PropTypes from 'prop-types';

const LikeIcon = ({ active }) => {
  const className = active ? 'far fa-thumbs-up active' : 'far fa-thumbs-up';
  return (
    <i className={className} />
  );
};

LikeIcon.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default LikeIcon;
