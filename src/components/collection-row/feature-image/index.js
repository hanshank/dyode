import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

/**
 * A component for an image with a title on the bottom of it
 *
 * @param {string} img path to image
 * @param {string} mobileImg path to alternative image for mobile
 * @param {string} text the text that describes the image
 * @param {string} classes add your own classes to the main container
 * @param {string} alt Image alt text for accesibility
 */
const FeatureImage = ({ img, mobileImg, text, classes, alt = 'An image that fits the clothing collection' }) => (
  <div className={`image-container${classes ? ` ${classes}` : ''}`}>
    {mobileImg ? (
      <img
        srcSet={`${mobileImg} 1x,
             ${img} 2x`}
        src={img}
        className="feature-image"
      />
    ) : (
      <img src={img} className="feature-image" />
    )}
    <div className="label-container">
      <h2 className="heading-1 image-label">{text}</h2>
    </div>
  </div>
)

FeatureImage.propTypes = {
  img: PropTypes.string,
}

export default FeatureImage
