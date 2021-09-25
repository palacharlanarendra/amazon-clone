import React, { useRef, useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';
import { db } from './firebase';
export default function Paypal() {
  const paypal = useRef();
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  console.log('this is the basket', basket);
  const basketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  console.log('payment', basketTotal(basket));

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'order details',
                amount: {
                  currency_code: 'USD',
                  value: basketTotal(basket),
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order
            .capture()
            .then((details) => details);
          console.log('orders', order);

          if (order.status === 'COMPLETED') {
            await db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(order.id)
              .set({
                basket: [...basket],
                amount: order.purchase_units[0].amount.value,
                created: order.create_time,
              });
            window.location.replace('https://clone-20772.web.app/orders');
          }
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
