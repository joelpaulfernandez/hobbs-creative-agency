import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo-container">
          <a href="/">
            <img src="/HOBBS LOGO 02.png" alt="Hobbs Creative Agency" className="logo" />
          </a>
        </div>
        <nav className="nav-container">
          <Link to="/services" className="nav-link">Services</Link>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 