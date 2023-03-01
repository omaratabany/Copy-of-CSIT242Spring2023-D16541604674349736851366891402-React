import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import CartListing from '../components/cart-listing'
import Footer from '../components/footer'
import './cart.css'

const Cart = (props) => {
  return (
    <div className="cart-container">
      <Helmet>
        <title>
          Cart - Copy of CSIT242_Spring2023_ D1_6541604_674349_7368513_66891402
        </title>
        <meta
          property="og:title"
          content="Cart - Copy of CSIT242_Spring2023_ D1_6541604_674349_7368513_66891402"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name6"></Header>
      <h1 className="cart-text">My Cart</h1>
      <CartListing rootClassName="cart-listing-root-class-name"></CartListing>
      <ul className="cart-ul list">
        <li className="list-item"></li>
      </ul>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  )
}

export default Cart
