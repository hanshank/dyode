import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import { PrimaryButton, SecondaryButton } from '../buttons'

/**
 *
 * @param {boolean} altButton Change to secondary button style
 * @param {boolean} rightPlacement choose true to align text and button to the left
 * @param {boolean} backgroundLeft Choose wether to left align background
 * @param {string} buttonText Text of the banner button
 * @param {boolean} slider Displays the slider indicators when true
 * @param {string} img url to image
 * @param {string} mobileImg url to mobile image
 */
const ImageBanner = ({ altButton = false, rightPlacement = false, backgroundLeft, buttonText, slider, img }) => {
  // returns custom classes with a space, so it could be added to ClassName property
  const getClassesFromProps = () => {
    let classes = ''

    if (rightPlacement) classes += ' right'
    if (backgroundLeft) classes += ' left-align-bg'

    return classes
  }

  return (
    <div className={`image-banner container${getClassesFromProps()}`} style={{ backgroundImage: `url(${img})` }}>
      <div className="image-banner-content">
        <h1 className="heading-1">Title Goes Here</h1>
        <h2 className="heading-2">Tagline will go right here.</h2>
        {altButton ? <SecondaryButton text={buttonText} /> : <PrimaryButton text={buttonText} />}
        {slider && (
          <div className="slider-indicators">
            <span className="slider-indicator active" />
            <span className="slider-indicator" />
            <span className="slider-indicator" />
            <span className="slider-indicator" />
          </div>
        )}
      </div>
    </div>
  )
}

ImageBanner.propTypes = {
  altButton: PropTypes.bool,
  rightPlacement: PropTypes.bool,
  backgroundLeft: PropTypes.bool,
  buttonText: PropTypes.string,
  slider: PropTypes.bool,
  img: PropTypes.string,
}

export default ImageBanner
