import React from 'react'

import PropTypes from 'prop-types'

import FootersLinks from './footers-links'
import Bottom from './bottom'
import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="footer-image"
      />
      <div className="footer-container">
        <FootersLinks
          rootClassName="footers-links-root-class-name"
          className=""
        ></FootersLinks>
      </div>
      <div className="footer-separator"></div>
      <Bottom className=""></Bottom>
    </footer>
  )
}

Footer.defaultProps = {
  rootClassName: '',
  image_src: '/playground_assets/home%20canvas-1-200h.png',
  image_alt: 'logo',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Footer
