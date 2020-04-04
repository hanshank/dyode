import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

// Components
import Grid from '../grid'
import ResponsiveImage from '../responsive-image'

// Images
import SocialOne from '../../images/social-1.jpg'
import SocialTwo from '../../images/social-2.jpg'
import SocialThree from '../../images/social-3.jpg'
import SocialFour from '../../images/social-4.jpg'
import SocialFive from '../../images/social-5.jpg'

/**
 * A social feed of Instagram images to display as a section on a page
 */
const SocialFeed = () => (
  <div className="social-feed-container container">
    <h2 className="heading-3 social-feed-title text-center">Follow us on Instagram!</h2>
    <Grid>
      <ResponsiveImage img={SocialOne} />
      <ResponsiveImage img={SocialTwo} />
      <ResponsiveImage img={SocialThree} />
      <ResponsiveImage img={SocialFour} hideOnMobile />
      <ResponsiveImage img={SocialFive} hideOnMobile />
    </Grid>
  </div>
)

export default SocialFeed
