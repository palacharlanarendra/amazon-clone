import React from 'react';
import './stylesheet/Product.css';
import { useStateValue } from './StateProvider';
import { v4 as uuidv4 } from 'uuid';
function Product({ title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log('this is thge basket fucker', basket);
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: uuidv4(),
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  rating = Math.floor(rating);
  return (
    <article className='product flex__20'>
      <section className='productInfo'>
        <p className='product__title'>{title}</p>
        <p className='product__price'>
          <small>$ </small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((elem) => (
              <p>⭐</p>
            ))}
        </div>
      </section>
      <img src={image} alt='intelligent investor book cover page' />
      <button onClick={addToBasket}>Add to Cart</button>
    </article>
  );
}

export default Product;
