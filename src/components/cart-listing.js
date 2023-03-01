import React from 'react'

import PropTypes from 'prop-types'

import CartInfo from './cart-info'
import CartEdit from './cart-edit'
import './cart-listing.css'

const CartListing = (props) => {
  return (
    <div className={`cart-listing-container ${props.rootClassName} `}>
      <div className="cart-listing-cart-item">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="cart-listing-image"
        />
        <CartInfo
          rootClassName="cart-info-root-class-name"
          className=""
        ></CartInfo>
        <CartEdit
          rootClassName="cart-edit-root-class-name"
          className=""
        ></CartEdit>
      </div>
    </div>
  )
}

CartListing.defaultProps = {
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1540574163026-643ea20ade25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHNvZmF8ZW58MHx8fHwxNjc3MzM5MzQ2&ixlib=rb-4.0.3&q=80&w=300',
  textinput_placeholder: 'placeholder',
  image_alt: 'image',
  button: 'Button',
  button1:
    'https://images.unsplash.com/photo-1540574163026-643ea20ade25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHNvZmF8ZW58MHx8fHwxNjc3MzM5MzQ2&ixlib=rb-4.0.3&q=80&w=1400',
}

CartListing.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  image_alt: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
}

export default CartListing
