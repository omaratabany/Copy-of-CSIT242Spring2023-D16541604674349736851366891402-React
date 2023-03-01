import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import UsernameHotbar from '../components/username-hotbar'
import Footer from '../components/footer'
import './account-details.css'

const AccountDetails = (props) => {
  return (
    <div className="account-details-container">
      <Helmet>
        <title>
          Account-Details - Copy of CSIT242_Spring2023_
          D1_6541604_674349_7368513_66891402
        </title>
        <meta
          property="og:title"
          content="Account-Details - Copy of CSIT242_Spring2023_ D1_6541604_674349_7368513_66891402"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name10"></Header>
      <div className="account-details-container1">
        <UsernameHotbar rootClassName="username-hotbar-root-class-name"></UsernameHotbar>
      </div>
      <div className="account-details-container2">
        <h1>This all we have for you</h1>
        <ul className="list account-details-ul">
          <li className="list-item account-details-li">
            <span>Creation Date</span>
          </li>
          <li className="list-item">
            <span>Last Purchase</span>
          </li>
        </ul>
      </div>
      <ul className="account-details-ul1 list"></ul>
      <Footer rootClassName="footer-root-class-name8"></Footer>
    </div>
  )
}

export default AccountDetails
