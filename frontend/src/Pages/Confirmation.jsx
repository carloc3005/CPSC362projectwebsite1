import React from 'react'
import './CSS/Confirmation.css'
import { useLocation } from 'react-router-dom'

const Confirmation = () => {
  const location = useLocation()
  const { confirmationNumber } = location.state || {}

  return (
    <div className="confirmation-container">
      <h1>Order Confirmation</h1>
      <div className="confirmation-message">
        <p>Thank you for your purchase!</p>
        <p>Your order has been successfully placed.</p>
        <p>Confirmation Number: <strong>{confirmationNumber}</strong></p>
      </div>
    </div>
  );
};

export default Confirmation
