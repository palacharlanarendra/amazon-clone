import React from 'react';
import './stylesheet/Subtotal.css';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';
function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const basketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  return (
    <section className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={basketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button onClick={(e) => history.push('/payment')}>
        Proceed to CheckOut
      </button>
    </section>
  );
}

export default Subtotal;
