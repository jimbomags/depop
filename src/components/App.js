import React, { useState } from 'react';
import Results from './Results';
import LikesList from './LikesList';

const App = () => {
  const [productsData, updateData] = useState([]);
  const [soldItemsVisible, toggleSoldItemsVisible] = useState(true);
  const [likesArr, updateLikes] = useState([]);

  const toggleLike = (title) => {
    if (likesArr.includes(title)) {
      const position = likesArr.indexOf(title);
      const arrBeg = likesArr.slice(0, position);
      const arrEnd = likesArr.slice(position + 1);

      return updateLikes([...arrBeg, ...arrEnd]);
    }
    return updateLikes([...likesArr, title]);
  };

  const fetchData = async () => {
    // eslint-disable-next-line no-undef
    const data = await fetch('https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products');
    const json = await data.json();

    updateData(json);
  };

  if (productsData.length < 1) {
    fetchData();
  }

  return (
    <div>
      <LikesList
        likesArr={likesArr}
        toggleLike={toggleLike}
      />
      <Results
        productsData={productsData}
        soldItemsVisible={soldItemsVisible}
        toggleSoldItemsVisible={toggleSoldItemsVisible}
        likesArr={likesArr}
        toggleLike={toggleLike}
      />
    </div>
  );
};

export default App;
