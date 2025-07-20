import React from 'react';
import './Services.css';

const placeholder = '/logo192.png'; // Use existing public image as placeholder

const Services: React.FC = () => (
  <div className="services-modern-page">
    <header className="services-hero">
      <div className="services-hero-content">
        <h1>Services</h1>
        <p>Learn more about our full suite of creative services designed to elevate your brand and connect with your audience.</p>
        <a href="#contact" className="btn-primary">Contact Us</a>
      </div>
    </header>

    <section className="services-section">
      <h2>Branding</h2>
      <div className="services-grid">
        <div className="service-card">
          <img src={placeholder} alt="Branding" />
          <div className="service-card-content">
            <h3>Branding & Design</h3>
            <p>Crafting brand identities that speak louder than words.</p>
            <ul>
              <li>Logo Design</li>
              <li>Brand Kits</li>
              <li>Corporate Stationery</li>
              <li>Packaging Design</li>
              <li>Visual Identity Systems</li>
            </ul>
            <a href="#contact" className="btn-secondary">Contact Us</a>
          </div>
        </div>
      </div>
    </section>

    <section className="services-section">
      <h2>Photography</h2>
      <div className="services-grid">
        <div className="service-card">
          <img src={placeholder} alt="Photography" />
          <div className="service-card-content">
            <h3>Photography</h3>
            <p>Telling your brand story frame by frame.</p>
            <ul>
              <li>Product Photography</li>
              <li>Lifestyle & Fashion Shoots</li>
              <li>Food Photography</li>
              <li>Corporate Portraits</li>
              <li>Event Coverage</li>
            </ul>
            <a href="#contact" className="btn-secondary">Contact Us</a>
          </div>
        </div>
      </div>
    </section>

    <section className="services-section">
      <h2>Videography</h2>
      <div className="services-grid">
        <div className="service-card">
          <img src={placeholder} alt="Videography" />
          <div className="service-card-content">
            <h3>Videography</h3>
            <p>Cinematic visuals that make an impact.</p>
            <ul>
              <li>Brand Films</li>
              <li>Product Videos</li>
              <li>Event Videography</li>
              <li>Social Media Reels</li>
              <li>Highlight & Promotional Videos</li>
            </ul>
            <a href="#contact" className="btn-secondary">Contact Us</a>
          </div>
        </div>
      </div>
    </section>

    <section className="services-section">
      <h2>Social Media Content</h2>
      <div className="services-grid">
        <div className="service-card">
          <img src={placeholder} alt="Social Media Content" />
          <div className="service-card-content">
            <h3>Social Media Content</h3>
            <p>Strategic content that drives engagement and builds community.</p>
            <ul>
              <li>Content Planning</li>
              <li>Static Posts & Reels</li>
              <li>Motion Graphics</li>
              <li>Copywriting & Captions</li>
              <li>Monthly Content Calendars</li>
            </ul>
            <a href="#contact" className="btn-secondary">Contact Us</a>
          </div>
        </div>
      </div>
    </section>

    <section className="services-section">
      <h2>Digital Illustration & Motion Graphics</h2>
      <div className="services-grid">
        <div className="service-card">
          <img src={placeholder} alt="Digital Illustration & Motion Graphics" />
          <div className="service-card-content">
            <h3>Digital Illustration & Motion Graphics</h3>
            <p>Creative visuals that move people.</p>
            <ul>
              <li>Custom Illustrations</li>
              <li>Explainer Videos</li>
              <li>2D Animation</li>
              <li>Logo Animation</li>
              <li>Title & Text Effects</li>
            </ul>
            <a href="#contact" className="btn-secondary">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Services; 