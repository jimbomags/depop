import React, { Component } from 'react';

import Button from './Button';
import LikeIcon from './LikeIcon';
import Product from './Product';
import Results from './Results';
import LikesList from './LikesList';

const App = () => {
  return (
    <div>
      <LikesList likesArr={['Shampoo', 'T-Shirt']} />
      <Results />
    </div>
  );
};

export default App;
