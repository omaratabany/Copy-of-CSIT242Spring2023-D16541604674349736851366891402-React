import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footers-links.css'

const FootersLinks = (props) => {
  return (
    <nav className={`footers-links-nav ${props.rootClassName} `}>
      <Link to="/about" className="footers-links-navlink">
        {props.text}
      </Link>
      <Link to="/team" className="footers-links-navlink1">
        {props.text3}
      </Link>
    </nav>
  )
}

FootersLinks.defaultProps = {
  text3: 'Team',
  rootClassName: '',
  text: 'About Us',
}

FootersLinks.propTypes = {
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default FootersLinks
