import React from 'react'

import PropTypes from 'prop-types'

import './search-listing.css'

const SearchListing = (props) => {
  return (
    <div className={`search-listing-container ${props.rootClassName} `}>
      <div className="search-listing-result-item">
        <div className="search-listing-container1">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="search-listing-image"
          />
          <label className="search-listing-text">{props.text}</label>
          <strong className="search-listing-text1">{props.text1}</strong>
          <span className="search-listing-text2">{props.text2}</span>
          <span className="">{props.text3}</span>
        </div>
      </div>
    </div>
  )
}

SearchListing.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1540574163026-643ea20ade25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHNvZmF8ZW58MHx8fHwxNjc3MzM5MzQ2&ixlib=rb-4.0.3&q=80&w=300',
  text3: 'Ships between 2-5 days',
  text1: '1,000 AED',
  image_alt: 'image',
  text: 'Brown leather sofa',
  text2: '8 left in stock',
  rootClassName: '',
}

SearchListing.propTypes = {
  image_src: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SearchListing
