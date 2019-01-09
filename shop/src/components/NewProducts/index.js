//Dependencies
import React from 'react';
//Internals
import NewItems from './NewItems';
import './index.css';

const NewProducts = () => (
  <div className="new-products">
    <div className="newProducts-title">
      <h4>New Products</h4>
    </div>
    <NewItems />
  </div>
);


export default NewProducts;
