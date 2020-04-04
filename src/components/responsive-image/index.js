import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

/**
 *
 * @param {string} img url/path to an image
 * @param {boolean} hideOnMobile choose to hide on mobile
 */
const ResponsiveImage = ({ img, hideOnMobile }) => (
  <div className={`responsive-image-container${hideOnMobile ? ' hide-on-mobile' : ''}`}>
    <img className="responsive-image" src={img} />
  </div>
)

ResponsiveImage.propTypes = {
  img: PropTypes.string,
  hideOnMobile: PropTypes.bool,
}

export default ResponsiveImage
