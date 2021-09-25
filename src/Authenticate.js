import React, { useState } from 'react';
import './stylesheet/Authenticate.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
function Authenticate() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };

  // this will create new user in the regitser
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <section className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='./images/amazon_logo_dark.png'
          alt='amazon logo dark'
        />
      </Link>

      <div className='login__container'>
        <form>
          <legend>Sign-in / Register</legend>
          <label>E-mail</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type='submit'
            onClick={signIn}
            className='login__signInButton'
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale.
          Please be sure that orders on this website are not real , You may
          loose money, Order it on your own risk.
        </p>

        <button onClick={register} className='login__registerButton'>
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Authenticate;
