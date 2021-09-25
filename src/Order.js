import React from 'react';
import './stylesheet/Order.css';
import moment from 'moment';
import OrderedBasket from './OrderedBasket';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
  let date = moment.unix(order.data.created).format('MMMM Do YYYY, hh:mm');
  console.log(order);
  return (
    <div className='order'>
      <h2>Order Number</h2>
      <p>{}</p>
      <p className='order__id'>
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <OrderedBasket
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className='order__total'>
            Order Total: <span>{value}</span>
          </h3>
        )}
        decimalScale={2}
        value={order.data.amount}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
}

export default Order;
