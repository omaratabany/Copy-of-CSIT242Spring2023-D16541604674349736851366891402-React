import React from 'react'

import PropTypes from 'prop-types'

import './cart-edit.css'

const CartEdit = (props) => {
  return (
    <div className={`cart-edit-container ${props.rootClassName} `}>
      <div className="cart-edit-container1">
        <div className="cart-edit-container2">
          <div className="cart-edit-container3">
            <button className="cart-edit-button button">{props.button4}</button>
            <div className="cart-edit-container4">
              <button className="cart-edit-button1 button">
                {props.button2}
              </button>
              <input
                type="text"
                placeholder="1"
                className="cart-edit-textinput input"
              />
              <button className="cart-edit-button2 button">
                {props.button3}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CartEdit.defaultProps = {
  button2: '-',
  button3: '+',
  button4: 'Remove',
  rootClassName: '',
}

CartEdit.propTypes = {
  button2: PropTypes.string,
  button3: PropTypes.string,
  button4: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CartEdit
