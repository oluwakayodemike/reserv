import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { FaPhone, FaHome, FaInfoCircle, FaDollarSign } from 'react-icons/fa';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">PACompany</div>
        {/* Desktop navigation */}
        <div className="nav-center">
          <ul className="nav-links-desktop">
            <li><a href="#new-house">New house</a></li>
            <li><a href="#apartment" className="active">Apartment</a></li>
            <li><a href="#construction">Construction</a></li>
            <li><a href="#my-house">My house</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </div>
        {/* Desktop action buttons */}
        <div className="nav-buttons-desktop">
          <button className="ad-btn">Place an ad</button>
          <button className="login-btn">Log in</button>
        </div>
        {/* Hamburger menu button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
        {/* Mobile menu overlay */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} />
        {/* Mobile menu */}
        <div className={`nav-links-mobile ${isMenuOpen ? 'open' : ''}`}>
          <h3>More</h3>
          <ul>
            <li><FaDollarSign /> USD - U.S. Dollar</li>
            <li><FaHome /> English (US)</li>
            <li><FaPhone /> Download the iPhone app</li>
            <li><FaInfoCircle /> Genius loyalty program</li>
            <li><FaHome /> List your property</li>
          </ul>
          <h4>Help and Support</h4>
          <ul>
            <li>Contact Customer Service</li>
            <li>Partner Dispute</li>
          </ul>
          <h4>Inspiration</h4>
          <ul>
            <li>Seasonal and holiday deals</li>
            <li>Travel articles</li>
          </ul>
          <div className="nav-buttons-mobile">
            <button className="ad-btn">Place an ad</button>
            <button className="login-btn">Log in</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;