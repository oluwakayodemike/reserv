import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">PACompany</div>
      <ul className="nav-links">
        <li><a href="#home">New House</a></li>
        <li><a href="#apartment">Apartment</a></li>
        <li><a href="#construction">Construction</a></li>
        <li><a href="#services">Services</a></li>
      </ul>
      <button className="ad-btn">Place an Ad</button>
    </nav>
  );
}

export default NavBar;
