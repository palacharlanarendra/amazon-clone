import React from 'react';
import './stylesheet/ShoppingBasket.css';
import { useStateValue } from './StateProvider';

function ShoppingBasket({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const deleteTheProduct = () => {
    console.log('clicked');
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };
  return (
    <section className='shoppingBasketProduct'>
      <img
        className='shoppingBasketProduct__image'
        src={image}
        alt='product title'
      />

      <article className='shoppingBasketProduct__info'>
        <p className='shoppingBasketProduct__title'>{title}</p>
        <p className='shoppingBasketProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='shoppingBasketProduct__rating'>
          {Array(rating)
            .fill()
            .map((elem) => (
              <p>⭐</p>
            ))}
        </div>
        <button className='order__total__show' onClick={deleteTheProduct}>
          Delete from Cart
        </button>
      </article>
    </section>
  );
}

export default ShoppingBasket;
