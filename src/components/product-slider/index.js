import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import ResponsiveImage from '../responsive-image'
import { getPrice } from '../../utils/helpers'
import './styles.scss'

import LeftArrow from '../../images/arrow-left.png'
import RightArrow from '../../images/arrow-right.png'

/**
 * A slider of products where you can click "next" or "previous"
 * @param {string} title a title for the slider
 * @param {object[]} products an array of product objects containing an image, title, name and a price
 */
const ProductSlider = ({ title, products }) => {
  // Change in order to display more or less products per slide
  const [visibleSlides, setVisibleSlides] = useState(2)
  // Stores current width of window, for being able to dynamically change the dom based on window size
  const [windowWidth, setWindowWidth] = useState(0)

  // Runs on inital load. Works similar to ComponentDidMount/Update in React classes
  useEffect(() => {
    const listener = () => {
      setWindowWidth(window.innerWidth)
    }
    if (window) {
      window.addEventListener('resize', listener)
      return () => {
        window.removeEventListener('resize', listener)
      }
    }
  }, [])

  // Returns true or false depending if page is currently desktop or not
  const isDesktop = windowWidth > 767

  return (
    <div className="product-slider-container container">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={isDesktop ? 195 : 205}
        totalSlides={products.length}
        visibleSlides={isDesktop ? 4 : 2}
        currentSlide={products.length / 2}
        dragEnabled={false}
        infinite
      >
        <h2 className="heading-3 text-center product-slider-title">{title}</h2>
        <div className="outer-slider-wrapper">
          <ButtonBack className="slider-button">
            <img src={LeftArrow} className="arrow-icon" />
          </ButtonBack>
          <div className="inner-slider-wrapper">
            <Slider>
              {products.map((product, i) => (
                <Slide index={i} key={i}>
                  <div className="product-slider-item" key={i}>
                    <ResponsiveImage img={product.image} />
                    <div className="product-text">
                      <h4 className="heading-4 product-title">{product.title}</h4>
                      <h5 className="heading-5 product-name">{product.name}</h5>
                    </div>
                    <p className="body-text product-price">{getPrice(product.price)}</p>
                  </div>
                </Slide>
              ))}
            </Slider>
          </div>

          <ButtonNext className="slider-button">
            <img src={RightArrow} className="arrow-icon" />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  )
}

ProductSlider.propTypes = {
  title: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.object),
}

export default ProductSlider
