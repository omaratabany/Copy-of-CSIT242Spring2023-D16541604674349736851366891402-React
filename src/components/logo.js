import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './logo.css'

const Logo = (props) => {
  return (
    <div className={`logo-container ${props.rootClassName} `}>
      <Link to="/" className="logo-navlink">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="logo-image"
        />
      </Link>
    </div>
  )
}

Logo.defaultProps = {
  rootClassName: '',
  image_src: '/playground_assets/home%20canvas-1-300h.png',
  image_alt: 'image',
}

Logo.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Logo
