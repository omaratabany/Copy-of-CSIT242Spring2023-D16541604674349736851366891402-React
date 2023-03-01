import React from 'react'

import PropTypes from 'prop-types'

import './product-info.css'

const ProductInfo = (props) => {
  return (
    <div className="product-info-hero">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="product-info-image"
      />
      <div className="product-info-container">
        <h1 className="product-info-text">{props.heading}</h1>
        <h2 className="product-info-text1">{props.heading1}</h2>
        <div className="product-info-btn-group">
          <button className="product-info-button button">{props.button}</button>
          <button className="product-info-button1 button">
            {props.button1}
          </button>
        </div>
        <select>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <span className="product-info-text2">
          <br></br>
          <br></br>
          <span>Some Info about the Product</span>
        </span>
      </div>
    </div>
  )
}

ProductInfo.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1529859503572-5b9d1e68e952?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjYxODI1OTE&ixlib=rb-1.2.1&w=1200',
  button1: 'More Details',
  button: 'Add to cart',
  heading1: 'Magnificent things are very simple.',
  heading: 'Product Name',
}

ProductInfo.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  button1: PropTypes.string,
  button: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
}

export default ProductInfo
