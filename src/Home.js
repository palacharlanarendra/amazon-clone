/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './stylesheet/Home.css';
import Product from './Product';
import Loader from './Loader';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import { getLocation } from './GetLocation';

const { uuid } = require('uuidv4');

console.log(getLocation()());
let data;
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      location: null,
    };
  }
  async componentDidMount() {
    await fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => this.setState({ data: json }));
  }

  render() {
    return (
      <main>
        <section className='home hero__section'>
          <div className='home__container'>
            {/* <img className='hero__image' src='' alt='hero banner' /> */}
            <ImageSlider slides={SliderData} />
            <section className='products__section'>
              <div className='home__row'>
                {!this.state.data ? (
                  <Loader />
                ) : (
                  this.state.data?.map((product) => (
                    <Product
                      className='flex__20'
                      id={uuid()}
                      title={product.title}
                      price={product.price}
                      image={product.image}
                      rating={product.rating.rate}
                    />
                  ))
                )}
              </div>
            </section>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
