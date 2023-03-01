import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import UsernameHotbar from '../components/username-hotbar'
import Footer from '../components/footer'
import './orders.css'

const Orders = (props) => {
  return (
    <div className="orders-container">
      <Helmet>
        <title>
          Orders - Copy of CSIT242_Spring2023_
          D1_6541604_674349_7368513_66891402
        </title>
        <meta
          property="og:title"
          content="Orders - Copy of CSIT242_Spring2023_ D1_6541604_674349_7368513_66891402"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name8"></Header>
      <div className="orders-container1">
        <UsernameHotbar rootClassName="username-hotbar-root-class-name1"></UsernameHotbar>
      </div>
      <div className="orders-container2">
        <h1>Orders</h1>
        <ul className="list orders-ul">
          <li className="list-item">
            <span>Order1</span>
          </li>
          <li className="list-item">
            <span>Order2</span>
          </li>
          <li className="list-item">
            <span>
              <span>Order3</span>
              <br></br>
            </span>
          </li>
        </ul>
      </div>
      <Footer rootClassName="footer-root-class-name9"></Footer>
    </div>
  )
}

export default Orders
