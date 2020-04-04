import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

/**
 * A grid that will auto-fit all child elements
 *
 * @param {object[]} children children meaning whatever html elements you want to be wrapped in the grid
 * @param {string} classes additonal classes for styling
 */
const Grid = ({ children, classes }) => <div className={`grid${classes ? ` ${classes}` : ''}`}>{children}</div>

Grid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  classes: PropTypes.string,
}

/**
 * A grid that spans 12 x 1fr. So e.g. if you have 3 children, they can span 4fr each to take the whole row
 *
 * @param {object[]} children children meaning whatever html elements you want to be wrapped in the grid
 * @param {string} classes additonal classes for styling
 */
export const TwelveColGrid = ({ children, classes }) => (
  <div className={`twelve-col-grid${classes ? ` ${classes}` : ''}`}>{children}</div>
)

TwelveColGrid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  classes: PropTypes.string,
}

export default Grid
