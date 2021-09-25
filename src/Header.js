import React from 'react';
import './stylesheet/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  var name = user?.email?.substring(0, user?.email?.lastIndexOf('@'));
  return (
    <header>
      <div className="header">
      <section className='container flex justify__space__between align-items-center'>
        <Link to='/'>
          <img
            src='/images/amazon_logo.png'
            alt='Brand Logo'
            className='header__logo brand'
          />
        </Link>

        <div className='header__search'>
          <input type='text' className='header__searchInput' />
          <SearchIcon className='header__searchIcon' />
        </div>

        <input id='toggle' type='checkbox' />
        <label className='bars' htmlFor='toggle'>
          <i class='fas fa-bars'></i>
        </label>

        <nav className='header__nav nav__bar flex justify__space__between'>
          <Link to={!user && '/authenticate'}>
            <div onClick={handleAuthentication} className='header__option'>
              <span className='header__optionLineOne'>
                Hello
                {!user ? ` Guest` : ` ${name}`}
              </span>
              <span className='header__optionLineTwo'>
                {user ? 'Sign Out' : 'Sign In'}
              </span>
            </div>
          </Link>
         <Link to="/orders">
              <div className='header__option'>
                <span className='header__optionLineTwo'>Orders</span>
              </div>
         </Link>

        </nav>
        <Link to='/checkout'>
          <div className='header__optionBasket flex-column'>
            <span className='header__optionLineTwo header__basketCount'>
              {basket?.length}
            </span>
            <div className='flex cart__design'>
              <ShoppingBasketIcon className='header__shoppingIcon' />
              <p>Cart</p>
            </div>
          </div>
        </Link>
      </section>
      </div>
    </header>
  );
}

export default Header;
