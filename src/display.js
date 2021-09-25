import React, { useState } from 'react';
import './App.css';
import PayPal from './paypal';

function Display() {
  const [checkout, setCheckOut] = useState(false);

  return (
    <div className='App'>
      {checkout ? (
        <PayPal />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}

export default Display;
