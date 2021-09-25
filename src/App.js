import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Authenticate from './Authenticate';
import { auth } from './firebase';
import Orders from './Orders';
import { useStateValue } from './StateProvider';
import PaymentMethod from './PaymentMethod';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51Jbx3VSBhNBa2qOqC16JNBr7lxu5uqBX246qt6ppx93eOLq1B8DFLutXSH0Q0m5mxUJaThSEsyWevAj10Hz8TQYh00mxInazqu'
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/Authenticate'>
            <Authenticate />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <PaymentMethod />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
