// /* eslint-disable react/jsx-no-comment-textnodes */
// import React from 'react';
// import './stylesheet/Home.css';
// import Product from './Product';
// const { uuid } = require('uuidv4');
// let data = fetch('https://fakestoreapi.com/products')
//   .then((res) => res.json())
//   .then((json) => json);
// function Home() {
//   return (
//     <main>
//       <section className='home hero__section'>
//         <div className='home__container'>
//           <img
//             className='hero__image'
//             src='https://m.media-amazon.com/images/I/617guwnPZsL._SX3000_.jpg'
//             alt='hero banner'
//           />
//           <div className='home__row'>
//             {data.map((product) => (
//               <Product
//                 id={uuid()}
//                 title='ASUS Vivo AiO V222, 21.5" (54.61 cm) FHD, Intel Pentium Gold 6405U, All-in-One Desktop (4GB/1TB HDD/Office 2019/Windows 10/Integrated Graphics/Wireless Keyboard & Mouse/Black/4.8 Kg), V222FAK-BA021TS'
//                 price={310.0}
//                 image='./images/asus_monitor.jpg'
//                 rating={3}
//               />
//             ))}
//             <Product
//               id={uuid()}
//               title='ASUS Vivo AiO V222, 21.5" (54.61 cm) FHD, Intel Pentium Gold 6405U, All-in-One Desktop (4GB/1TB HDD/Office 2019/Windows 10/Integrated Graphics/Wireless Keyboard & Mouse/Black/4.8 Kg), V222FAK-BA021TS'
//               price={310.0}
//               image='./images/asus_monitor.jpg'
//               rating={3}
//             />
//             <Product
//               title='OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage) || 64MP+8MP+2MP triple rear camera with 1080p video at 30/60 fps, 4k 30 fps | 16MP front camera with 1080p video at 30/60 fps.
//               '
//               price={299.0}
//               image='./images/oneplus_phone.jpg'
//               rating={2}
//             />
//           </div>
//           <div className='home__row'>
//             <Product
//               title="Dabur Honey :100% Pure World's No.1 Honey Brand with No Sugar Adulteration - 1kg (Get 20% Extra)"
//               price={354.0}
//               image='./images/dabur_honey.jpg'
//               rating={4}
//             />
//             <Product
//               title='JBL C100SI by Harman Wired In Ear Headphones with Mic (Black)'
//               price={679.0}
//               image='./images/jbl_earphones.jpg'
//               rating={4}
//             />
//             <Product
//               title='Infinity Glide 500 by Harman, 20 Hrs Playtime with Quick Charge, Wireless On Ear Headphone with Mic, Deep Bass, Dual Equalizer, Bluetooth 5.0 with Voice Assistant Support for Mobile Phones (Blue)'
//               price={99.0}
//               image='./images/infinity_glide_headphones.jpg'
//               rating={3}
//             />
//           </div>
//           {/* how_to_win_friends_and_influence_people */}
//           <div className='home__row'>
//             <Product
//               title='How to Win Friends and Influence People Paperback – 21 November 2018'
//               price={19.0}
//               image='./images/how_to_win_friends_and_influence_people.jpg'
//               rating={3}
//             />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Home;

/* eslint-disable react/jsx-no-comment-textnodes */
// import React from 'react';
// import './stylesheet/Home.css';
// import Product from './Product';
// const { uuid } = require('uuidv4');
// let data;
// class Home extends React.Component {
//   render() {
//     async function mount() {
//       data = await fetch('https://fakestoreapi.com/products')
//         .then((res) => res.json())
//         .then((json) => json);
//     }
//     mount();
//     return (
//       <main>
//         <section className='home hero__section'>
//           <div className='home__container'>
//             <img
//               className='hero__image'
//               src='https://m.media-amazon.com/images/I/617guwnPZsL._SX3000_.jpg'
//               alt='hero banner'
//             />
//             <div className='home__row'>
//               <Product
//                 id={uuid()}
//                 title='ASUS Vivo AiO V222, 21.5" (54.61 cm) FHD, Intel Pentium Gold 6405U, All-in-One Desktop (4GB/1TB HDD/Office 2019/Windows 10/Integrated Graphics/Wireless Keyboard & Mouse/Black/4.8 Kg), V222FAK-BA021TS'
//                 price={310.0}
//                 image='./images/asus_monitor.jpg'
//                 rating={3}
//               />
//               <Product
//                 id={uuid()}
//                 title='OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage) || 64MP+8MP+2MP triple rear camera with 1080p video at 30/60 fps, 4k 30 fps | 16MP front camera with 1080p video at 30/60 fps.
//                 '
//                 price={299.0}
//                 image='./images/oneplus_phone.jpg'
//                 rating={2}
//               />
//             </div>
//             {console.log(data)}
//             <div className='home__row'>
//               {data?.map((product) => (
//                 <Product
//                   id={uuid()}
//                   title={product.title}
//                   price={product.price}
//                   image={product.image}
//                   rating={product.rating.rate}
//                 />
//               ))}
//             </div>
//             {/* how_to_win_friends_and_influence_people */}
//           </div>
//         </section>
//       </main>
//     );
//   }
// }

// export default Home;
