import React from 'react';
import ReactDOM from 'react-dom';
import Results from '../components/Results';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Results 
      productsData={[{
        img: "https://picsum.photos/500/?image=0",
        title: "Polo Shirt",
        brand: "Ralph Lauren",
        size: "XL",
        price: "21",
        sold: false,
      }]}
      likesArr={[]}
    />,
    div,
  );
});
