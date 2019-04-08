import React from 'react';
import PropTypes from 'prop-types';

const LikesList = ({ likesArr, toggleLike }) => {
  const List = () => (
    <div className="likes-list">
      {likesArr.map(title => (
        <p key={title}>
          {title}
          <i
            role="button"
            tabIndex="0"
            className="fas fa-times"
            onClick={() => toggleLike(title)}
            onKeyDown={e => (e.keyCode === 13 ? toggleLike(title) : null)}
          />
        </p>
      ))}
    </div>
  );

  return (
    <div className="likes-list-container">
      <div className="likes-count">
        <i className="far fa-thumbs-up" />
        { likesArr.length }
      </div>
      { likesArr.length > 0 && <List /> }
    </div>
  );
};

LikesList.propTypes = {
  likesArr: PropTypes.arrayOf(PropTypes.string),
  toggleLike: PropTypes.func.isRequired,
};

LikesList.defaultProps = {
  likesArr: [],
};

export default LikesList;
