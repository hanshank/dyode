import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

// Images
import EmailIcon from '../../images/email-icon.png'

// Components
import { CTAButton } from '../buttons'
import Grid from '../grid'

/**
 * The newsletter email signup cta section
 */
const NewsletterCTA = () => (
  <div className="newsletter-cta-container container">
    <div className="newsletter-cta-header">
      <img src={EmailIcon} className="icon" />
      <h2 className="heading-3 --white">Sign Up & Stay Connected</h2>
    </div>
    <Grid classes="newsletter-cta-content">
      <p className="body-text newsletter-text --white">
        Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new
        stuff drops!
      </p>
      <form className="newsletter-cta-form">
        <input placeholder="Your Email Address" className="form-field newsletter-cta-form-field" />
        <CTAButton text="Subscribe" />
      </form>
    </Grid>
  </div>
)

export default NewsletterCTA
