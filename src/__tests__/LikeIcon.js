import React from 'react';
import ReactDOM from 'react-dom';
import LikeIcon from '../components/LikeIcon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LikeIcon />, div);
});