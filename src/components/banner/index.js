import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

/**
 * Simple banner to display some text on top of the page
 * @param {string} text a text to put inside the banner
 */
const Banner = ({ text }) => (
  <div className="banner">
    <h2 className="banner-title">{text}</h2>
  </div>
)

Banner.propTypes = {
  text: PropTypes.string,
}

export default Banner
