import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import UsernameHotbar from '../components/username-hotbar'
import Footer from '../components/footer'
import './payment.css'

const Payment = (props) => {
  return (
    <div className="payment-container">
      <Helmet>
        <title>
          Payment - Copy of CSIT242_Spring2023_
          D1_6541604_674349_7368513_66891402
        </title>
        <meta
          property="og:title"
          content="Payment - Copy of CSIT242_Spring2023_ D1_6541604_674349_7368513_66891402"
        />
      </Helmet>
      <div className="payment-container1"></div>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="payment-container2">
        <UsernameHotbar rootClassName="username-hotbar-root-class-name2"></UsernameHotbar>
      </div>
      <div className="payment-container3">
        <h1>Payments History</h1>
        <ul className="list">
          <li className="list-item">
            <span>Purchase of xxxx</span>
          </li>
          <li className="list-item">
            <span>Purchase of xxxx</span>
          </li>
          <li className="list-item">
            <span>Purchase of xxxx</span>
          </li>
        </ul>
      </div>
      <Footer rootClassName="footer-root-class-name6"></Footer>
    </div>
  )
}

export default Payment
