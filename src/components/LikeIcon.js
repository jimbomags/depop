import React from 'react';
import PropTypes from 'prop-types';

const LikeIcon = ({ active, title, toggleLike }) => {
  const className = active ? 'far fa-thumbs-up active' : 'far fa-thumbs-up';
  return (
    <i
      role="button"
      tabIndex="0"
      className={className}
      onClick={() => toggleLike(title)}
      onKeyDown={e => (e.keyCode === 13 ? toggleLike(title) : null)}
    />
  );
};

LikeIcon.propTypes = {
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  toggleLike: PropTypes.func.isRequired,
};

export default LikeIcon;
