import React from 'react';
import Link from "next/link";
import Router from 'next/router';

const Home = () => {

  const handleClick = () => {
    console.log('Placing Your Order');
    Router.push('/product')
  }
  
  return (
    <div>
      <h1>Muhamad Muzani</h1>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/blog'>Blog</Link></li>
          <li><Link href='/docs'>Docs</Link></li>
          <li><Link href='/product'>Product</Link></li>
        </ul>
        <button onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default Home