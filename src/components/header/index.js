import PropTypes from 'prop-types'
import React, { useState } from 'react'
import './styles.scss'

// Images
import CartIcon from '../../images/shopping-cart.svg'
import Hamburger from '../../images/hamburger-icon.svg'
import CloseIcon from '../../images/close-icon.svg'

/**
 * A navbar item is a link that appears in the main navigation
 *
 * @param {string} name The name of the link
 */
const NavbarItem = ({ name }) => (
  <li className="navbar-item">
    <a className="navbar-link" href="/#">
      {name}
    </a>
  </li>
)

NavbarItem.propTypes = {
  name: PropTypes.string,
}

/**
 * The header of the page that includes the main navigation
 *
 * @param {string} name The name of the link
 */
const Header = ({ navItems }) => {
  const [navOpen, setNavOpen] = useState(false)
  const menuItems = ['Womens', 'Mens', 'Accessories', 'Sale!']

  const openNav = () => setNavOpen(!navOpen)
  const closeNav = () => setNavOpen(false)

  return (
    <header className="header container-fluid">
      <nav className="navbar container">
        <img className="hamburger-icon" src={Hamburger} onClick={openNav} />
        <a href="/" className="navbar-brand">
          Logo
        </a>
        <ul className={`navbar-items${navOpen ? ' open' : ''}`}>
          <img className="navbar-close" onClick={closeNav} src={CloseIcon} />
          {menuItems.map(navItem => (
            <NavbarItem name={navItem} key={navItem} />
          ))}
        </ul>
        <img className="cart-icon" src={CartIcon} />
      </nav>
    </header>
  )
}

Header.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.string),
}

export default Header
