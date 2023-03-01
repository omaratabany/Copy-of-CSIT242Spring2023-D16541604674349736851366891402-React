import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card1.css'

const GalleryCard1 = (props) => {
  return (
    <div className={`gallery-card1-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card1-image"
      />
    </div>
  )
}

GalleryCard1.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxmdXJuaXR1cmV8ZW58MHx8fHwxNjc3MjQ1MTAx&ixlib=rb-4.0.3&w=1500',
}

GalleryCard1.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default GalleryCard1
