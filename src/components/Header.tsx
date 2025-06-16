import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo-container">
          <img src="/logo.png" alt="Hobbs Creative Agency" className="logo" />
          <span className="logo-text">HOBBS CREATIVE</span>
        </div>
        <nav className="nav-container">
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 