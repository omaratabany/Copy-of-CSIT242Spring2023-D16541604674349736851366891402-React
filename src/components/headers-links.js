import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './headers-links.css'

const HeadersLinks = (props) => {
  return (
    <nav className={`headers-links-nav ${props.rootClassName} `}>
      <Link to="/" className="headers-links-navlink">
        {props.text}
      </Link>
      <Link to="/product" className="headers-links-navlink1">
        {props.text2}
      </Link>
      <Link to="/product" className="headers-links-navlink2">
        {props.text3}
      </Link>
      <Link to="/search" className="headers-links-navlink3">
        <svg viewBox="0 0 1024 1024" className="headers-links-icon">
          <path
            d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
            className=""
          ></path>
        </svg>
      </Link>
      <Link to="/cart" className="headers-links-navlink4">
        <svg viewBox="0 0 1024 1024" className="headers-links-icon2">
          <path
            d="M726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM42 86h140l40 84h632q18 0 30 13t12 31q0 2-6 20l-152 276q-24 44-74 44h-318l-38 70-2 6q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26z"
            className=""
          ></path>
        </svg>
      </Link>
      <Link to="/payment" className="headers-links-navlink5">
        <svg viewBox="0 0 1024 1024" className="headers-links-icon4">
          <path
            d="M896 896v-85.333c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464h-341.333c-58.88 0-112.299 23.936-150.869 62.464s-62.464 91.989-62.464 150.869v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333c0-35.371 14.293-67.285 37.504-90.496s55.125-37.504 90.496-37.504h341.333c35.371 0 67.285 14.293 90.496 37.504s37.504 55.125 37.504 90.496v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM725.333 298.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464-112.299 23.936-150.869 62.464-62.464 91.989-62.464 150.869 23.936 112.299 62.464 150.869 91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869zM640 298.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496 14.293-67.285 37.504-90.496 55.125-37.504 90.496-37.504 67.285 14.293 90.496 37.504 37.504 55.125 37.504 90.496z"
            className=""
          ></path>
        </svg>
      </Link>
    </nav>
  )
}

HeadersLinks.defaultProps = {
  text2: 'Sales',
  rootClassName: '',
  text: 'Home',
  text3: 'New Arrivals',
}

HeadersLinks.propTypes = {
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
}

export default HeadersLinks
