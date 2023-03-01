import React from 'react'

import PropTypes from 'prop-types'

import './cart-info.css'

const CartInfo = (props) => {
  return (
    <div className={`cart-info-container ${props.rootClassName} `}>
      <div className="cart-info-container1">
        <div className="cart-info-container2">
          <label className="cart-info-text">{props.text}</label>
          <strong className="cart-info-text1">{props.text1}</strong>
          <span className="cart-info-text2">{props.text2}</span>
          <span className="">{props.text3}</span>
        </div>
      </div>
    </div>
  )
}

CartInfo.defaultProps = {
  text: 'Brown leather sofa',
  text3: 'Ships between 2-5 days',
  text2: '8 left in stock',
  text1: '1,000 AED',
  rootClassName: '',
}

CartInfo.propTypes = {
  text: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CartInfo
