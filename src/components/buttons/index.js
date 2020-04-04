import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

/**
 * The root Button component
 * @param {string} text the text button
 * @param {string} classes add additional classes for styling
 */
const Button = ({ text, classes }) => <button className={`button${classes ? ` ${classes}` : ''}`}>{text}</button>

Button.propTypes = {
  text: PropTypes.string,
  classes: PropTypes.string,
}

/**
 * Primary button in black
 * @param {string} text the text button
 */
export const PrimaryButton = ({ text }) => <Button classes="primary-button" text={text} />

PrimaryButton.propTypes = {
  text: PropTypes.string,
}

/**
 * A secondary button with a green for CTA sections
 * @param {string} text the text button
 */
export const SecondaryButton = ({ text }) => <Button classes="secondary-button" text={text} />

SecondaryButton.propTypes = {
  text: PropTypes.string,
}

/**
 * A button for CTA sections
 * @param {string} text the text button
 */
export const CTAButton = ({ text }) => <Button classes="cta-button" text={text} />

CTAButton.propTypes = {
  text: PropTypes.string,
}
