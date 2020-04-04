import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

// Images
import FacebookIcon from '../../images/facebook.png'
import InstagramIcon from '../../images/instagram.png'
import TwitterIcon from '../../images/twitter.png'

/**
 * A component for an image with a title on the bottom of it
 *
 * @param {string} title The menu title, appearing on top of the list
 * @param {string[]} pages list of all the menu links
 * @param {boolean} openByDefault Define wether menu is open by default on mobile
 */
const FooterMenu = ({ title, pages, openByDefault = false }) => {
  const [menuOpen, setMenuOpen] = useState(openByDefault)

  return (
    <div className="footer-menu-container">
      <div className="footer-menu-header">
        <h2 className="footer-section-title">{title}</h2>
        <button className="footer-menu-toggle-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '-' : '+'}
        </button>
      </div>
      <ul className={`footer-menu${menuOpen ? ' open' : ''}`}>
        {pages.map((page, i) => (
          <li className="footer-menu-item" key={i}>
            <a href="#" className="footer-menu-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

FooterMenu.propTypes = {
  title: PropTypes.string,
  pages: PropTypes.arrayOf(PropTypes.string),
  openByDefault: PropTypes.bool,
}

/**
 * A footer for the page
 */
const Footer = () => {
  const csPages = ['Accessibility', 'Contact Us', 'Return Policy', 'FAQ', 'Gift Certificates', 'Wishlist']
  const companyPages = ['About Us', 'Carreers', 'Press', 'Affiliates']

  return (
    <footer className="footer container-fluid">
      <div className="container footer-inner">
        <div className="footer-menus">
          <FooterMenu title="Customer Service" pages={csPages} openByDefault />
          <FooterMenu title="Company" pages={companyPages} />
        </div>
        <div className="social-icon-menu">
          <h2 className="footer-section-title">Follow Us</h2>
          <div className="social-icons">
            <img src={FacebookIcon} className="social-icon" />
            <img src={InstagramIcon} className="social-icon" />
            <img src={TwitterIcon} className="social-icon" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
