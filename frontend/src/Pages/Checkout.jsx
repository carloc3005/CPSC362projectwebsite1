import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CSS/Checkout.css'

const Checkout = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expMonth, setExpMonth] = useState('')
  const [expYear, setExpYear] = useState('')
  const [cvv, setCvv] = useState('')
  const [steamAccount, setSteamAccount] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to backend
    const confirmationNumber=Math.floor(Math.random()*1000000)
    navigate('/confirmation',{ state:{confirmationNumber}})
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="checkout-section">
          <h2>Billing Address</h2>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Address</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
          <label>City</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
          <label>State</label>
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
          <label>Zip</label>
          <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} required />
        </div>
        <div className="checkout-section">
          <h2>Payment Information</h2>
          <label>Name on Card</label>
          <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} required />
          <label>Credit Card Number</label>
          <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
          <label>Exp Month</label>
          <input type="text" value={expMonth} onChange={(e) => setExpMonth(e.target.value)} required />
          <label>Exp Year</label>
          <input type="text" value={expYear} onChange={(e) => setExpYear(e.target.value)} required />
          <label>CVV</label>
          <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
        </div>
        <div className="steamaccount">
            <h2>Steam Informatioin</h2>
            <label>Steam Account</label>
            <input type="text" valye={steamAccount}  onChange={(e) => setSteamAccount(e.target.value)} required />

        </div>
        <button type="submit" className="checkout-btn">Submit Payment</button>
      </form>
    </div>
  );
};

export default Checkout;
