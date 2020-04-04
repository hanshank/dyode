/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../header'
import Footer from '../footer'
import Banner from '../banner'

// Styles
import './styles.scss'
import '../../styles/global.scss'

/**
 * A layout to wrap content in for some basic layout
 *
 * @param {JSX.Element} children children html node to be wrapped in layout
 */
const Layout = ({ children }) => (
  <>
    <Banner text="FREE SHIPPING ON ALL ORDERS OVER $75" />
    <Header />
    <main className="main">{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
