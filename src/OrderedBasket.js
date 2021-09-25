import React from 'react';
import './stylesheet/OrderedBasket.css';
import { useStateValue } from './StateProvider';

function OrderedBasket({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const deleteTheProduct = () => {
    console.log('clicked');
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };
  return (
    <section className='orderedBasketProduct'>
      <img
        className='orderedBasketProduct__image'
        src={image}
        alt='product title'
      />

      <article className='orderedBasketProduct__info'>
        <p className='orderedBasketProduct__title'>{title}</p>
        <p className='orderedBasketProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='orderedBasketProduct__rating'>
          {Array(rating)
            .fill()
            .map((elem) => (
              <p>⭐</p>
            ))}
        </div>
      </article>
    </section>
  );
}

export default OrderedBasket;
