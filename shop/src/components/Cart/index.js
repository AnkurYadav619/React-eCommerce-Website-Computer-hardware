// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
// Internals
import './index.css';


class Cart extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    addItemToCart: PropTypes.func.isRequired,
  };

  render() {
    return(
      <div className="cart">
        <h1>My Cart</h1>
        <div className="cart-items">
          {map(this.props.products, (product) => (
            <div className="cart-item" key={`${product.id}`}>
              <p>{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Cart;