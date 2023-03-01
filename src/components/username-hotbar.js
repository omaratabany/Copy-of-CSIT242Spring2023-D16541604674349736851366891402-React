import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './username-hotbar.css'

const UsernameHotbar = (props) => {
  return (
    <div className={`username-hotbar-container ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="username-hotbar-icon">
        <path
          d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
          className=""
        ></path>
      </svg>
      <h1 className="">{props.heading}</h1>
      <Link to="/account-details" className="username-hotbar-navlink">
        <li className="username-hotbar-li list-item">
          <span className="">{props.text}</span>
        </li>
      </Link>
      <Link to="/orders" className="username-hotbar-navlink1">
        <li className="username-hotbar-li1 list-item">
          <span className="">{props.text1}</span>
        </li>
      </Link>
      <Link to="/payment" className="username-hotbar-navlink2">
        <li className="username-hotbar-li2 list-item">
          <span className="">{props.text2}</span>
        </li>
      </Link>
    </div>
  )
}

UsernameHotbar.defaultProps = {
  text: 'Account Details',
  rootClassName: '',
  heading: 'Username',
  text2: 'Payments',
  text1: 'Orders',
}

UsernameHotbar.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
}

export default UsernameHotbar
