import React from 'react';
import './stylesheet/Checkout.css';
import Subtotal from './Subtotal';
import ShoppingBasket from './ShoppingBasket';
import { useStateValue } from './StateProvider';
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <section className='checkout column'>
      <article className='checkout__left'>
        <img
          className='checkout__BannerAdd'
          src='./images/ILB_BrightColors.jpg'
          alt='amazon banner'
        />
        <div className='shoppingBasket__interface'>
          <h3>Hello, {user?.email}</h3>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
          {basket.map((product) => (
            <ShoppingBasket
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      </article>
      <aside className='checkout__title'>
        <Subtotal />
      </aside>
    </section>
  );
}

export default Checkout;
