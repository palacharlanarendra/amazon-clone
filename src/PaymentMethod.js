// export default PaymentMethod;
import { Link, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ShoppingBasket from './ShoppingBasket';
import './stylesheet/PaymentMethod.css';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';

import Display from './display';
function PaymentMethod() {
  const basketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  console.log('xxxxxxxxxxx', basketTotal());
  const [{ basket, user }, dispatch] = useStateValue();
  console.log('xxxxxxxxxxx', basketTotal(basket));
  return (
    <div className='payment'>
      <div className='payment__container'>
        {/* Payment Section - Delivery address */}
        <h1>
          Checkout ( <Link to='/checkout'>{basket?.length} items</Link>)
        </h1>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p contenteditable="true">Room No : 2-123</p>
            <p contenteditable="true">AltCampus, Dharamshala</p>
          </div>
        </div>
        {/* Payment section - Review Items */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map((item) => (
              <ShoppingBasket
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Payment Section - Payment Method */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
            {/* Stripe method */}
            <CurrencyFormat
              renderText={(value) => <h3>Order Total: {value}</h3>}
              decimalScale={2}
              value={basketTotal(basket)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
            <Display />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
