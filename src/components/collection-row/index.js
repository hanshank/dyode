import React from 'react'
import PropTypes from 'prop-types'
import FeatureImage from './feature-image'
import { TwelveColGrid } from '../grid'
import './styles.scss'

// Images
import WomensImg from '../../images/womens-image.jpg'
import MensImg from '../../images/mens-image.jpg'
import AccessoriesImg from '../../images/accessories-image.jpg'
import AccessoriesImgMobile from '../../images/accessories-image-mobile.jpg'

/**
 * A component for displaying a row of feature images
 */
const CollectionRow = () => (
  <TwelveColGrid classes="container">
    <FeatureImage img={WomensImg} text="Womens" classes="womens-feature" />
    <FeatureImage img={MensImg} text="Mens" classes="mens-feature" />
    <FeatureImage
      img={AccessoriesImg}
      mobileImg={AccessoriesImgMobile}
      text="Accessories"
      classes="accessories-feature"
    />
  </TwelveColGrid>
)

export default CollectionRow
