import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './register.css'

const Register = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>
          Register - Copy of CSIT242_Spring2023_
          D1_6541604_674349_7368513_66891402
        </title>
        <meta
          property="og:title"
          content="Register - Copy of CSIT242_Spring2023_ D1_6541604_674349_7368513_66891402"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name7"></Header>
      <span className="register-text">Username:</span>
      <input
        type="text"
        required
        placeholder="placeholder"
        className="register-input input"
      />
      <span className="register-text1">
        <span>Password:</span>
        <br></br>
      </span>
      <input
        type="text"
        required
        placeholder="placeholder"
        className="register-input1 input"
      />
      <Link to="/payment" className="register-navlink button">
        <span>
          <span>Register</span>
          <br></br>
        </span>
      </Link>
      <Footer rootClassName="footer-root-class-name7"></Footer>
    </div>
  )
}

export default Register
