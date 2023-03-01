import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>
          Login - Copy of CSIT242_Spring2023_ D1_6541604_674349_7368513_66891402
        </title>
        <meta
          property="og:title"
          content="Login - Copy of CSIT242_Spring2023_ D1_6541604_674349_7368513_66891402"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name5"></Header>
      <span className="login-text">Username:</span>
      <input
        type="text"
        required
        placeholder="placeholder"
        className="login-input input"
      />
      <span className="login-text1">
        <span>Password:</span>
        <br></br>
      </span>
      <input
        type="text"
        required
        placeholder="placeholder"
        className="login-input1 input"
      />
      <button className="login-button button">
        <span>
          <span>Login</span>
          <br></br>
        </span>
      </button>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default Login
