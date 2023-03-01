import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import UsernameHotbar from '../components/username-hotbar'
import Footer from '../components/footer'
import './account.css'

const Account = (props) => {
  return (
    <div className="account-container">
      <Helmet>
        <title>
          Account - Copy of CSIT242_Spring2023_
          D1_6541604_674349_7368513_66891402
        </title>
        <meta
          property="og:title"
          content="Account - Copy of CSIT242_Spring2023_ D1_6541604_674349_7368513_66891402"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name9"></Header>
      <UsernameHotbar rootClassName="username-hotbar-root-class-name3"></UsernameHotbar>
      <Footer rootClassName="footer-root-class-name10"></Footer>
    </div>
  )
}

export default Account
