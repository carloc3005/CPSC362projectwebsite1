import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';
import closebutton from '../Assets/closebutton.png';

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img">
          <img className="product-display-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <div className="product-header">
          <h1>{product.name}</h1>
          <Link to="/knives" className="close-button">
            <img src={closebutton} width="30" height="30" alt="" />
          </Link>
        </div>
        <div className="product-price">${product.knife_price}</div>
        <div className="product-description">
          <h2>Description</h2>
          <p>{product.description}</p>
        </div>
        <div className="product-wear">
          <h2>Select Wear</h2>
          <div className="wear-options">
            <button>Factory New</button>
            <button>Minimal Wear</button>
            <button>Field Tested</button>
            <button>Well-Worn</button>
            <button>Battle-Scarred</button>
          </div>
        </div>
        <button className="add-to-cart" onClick={() => addToCart(product.id)}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
