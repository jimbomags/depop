import React from 'react';
import PropTypes from 'prop-types';

const LikesList = ({ likesArr }) => {
  const List = () => (
    <div className="likes-list">
      {likesArr.map(title => (
        <p>
          {title}
          <i className="fas fa-times" />
        </p>
      ))}
    </div>
  );

  return (
    <div className="likes-list-container">
      <div className="likes-count">
        <i className="far fa-thumbs-up" />
        {likesArr.length}
      </div>
      { likesArr && <List /> }
    </div>
  );
};

LikesList.propTypes = {
  likesArr: PropTypes.arrayOf(PropTypes.string),
};

LikesList.defaultProps = {
  likesArr: [],
};

export default LikesList;
