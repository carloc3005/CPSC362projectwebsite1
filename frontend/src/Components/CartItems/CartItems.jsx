import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import removeicon from '../Assets/removeicon.png';

export const CartItems = () => {
  const { getTotalCartAmount, all_knifes, cartItems, removeFromCart, addToCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-content">
        <div className="cart-items">
          {all_knifes.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div key={e.id} className="cart-item">
                  <img src={e.image} alt="" className="cart-item-image" />
                  <div className="cart-item-details">
                    <h2 className="cart-item-title">{e.name}</h2>
                    <p className="cart-item-price">${e.knife_price}</p>
                    <div className="cart-item-quantity">
                      <button className="quantity-btn" onClick={() => removeFromCart(e.id)}>-</button>
                      <input type="text" value={cartItems[e.id]} readOnly className="quantity-input" />
                      <button className="quantity-btn" onClick={() => addToCart(e.id)}>+</button>
                    </div>
                  </div>
                  <div className="cart-item-total">
                    <p>${e.knife_price * cartItems[e.id]}</p>
                    <button className="remove-btn" onClick={() => removeFromCart(e.id)}>
                      <img src={removeicon} alt="Remove" style={{height:20, width:20}} />
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="cart-summary">
          <h2>Summary</h2>
          <div className="summary-item">
            <p>Subtotal</p>
            <p>${totalAmount}</p>
          </div>
          <div className="summary-item">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="summary-item total">
            <p>Total</p>
            <p>${totalAmount}</p>
          </div>
          <Link to="/checkout"> <button className="checkout-btn">Proceed to Checkout</button> </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
