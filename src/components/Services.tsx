import React from 'react';
import './Services.css';

const placeholder = '/logo192.png';

const Services: React.FC = () => (
  <div>
    {/* Hero Section */}
    <div className="services-hero-minimal">
      <div className="services-hero-minimal-content">
        <h1>Where Creativity Meets Purpose</h1>
        <p>At Hobbs Creative Space, we bring your vision to life through innovative design, compelling storytelling, and bold branding. From concept to execution, we offer a full suite of creative services designed to elevate your brand and connect with your audience.</p>
        <a href="#contact" className="btn-outline">Contact Us</a>
      </div>
    </div>

    {/* Branding & Design Section */}
    <section className="service-section">
      <h2>Branding & Design</h2>
      <div className="service-row">
        <img src={placeholder} alt="Branding & Design" className="service-img-large" />
        <div className="service-info">
          <p>Crafting brand identities that speak louder than words.</p>
          <ul>
            <li>Logo Design</li>
            <li>Brand Kits (Colors, Typography, Guidelines)</li>
            <li>Corporate Stationery</li>
            <li>Packaging Design</li>
            <li>Visual Identity Systems</li>
          </ul>
          <a href="#contact" className="btn-outline">Contact Us</a>
        </div>
      </div>
    </section>

    {/* Photography Section */}
    <section className="service-section">
      <h2>Photography</h2>
      <div className="service-row reverse">
        <img src={placeholder} alt="Photography" className="service-img-large" />
        <div className="service-info">
          <p>Telling your brand story frame by frame.</p>
          <ul>
            <li>Product Photography</li>
            <li>Lifestyle & Fashion Shoots</li>
            <li>Food Photography</li>
            <li>Corporate Portraits</li>
            <li>Event Coverage</li>
          </ul>
          <a href="#contact" className="btn-outline">Contact Us</a>
        </div>
      </div>
    </section>

    {/* Videography Section */}
    <section className="service-section">
      <h2>Videography</h2>
      <div className="service-row">
        <img src={placeholder} alt="Videography" className="service-img-large" />
        <div className="service-info">
          <p>Cinematic visuals that make an impact.</p>
          <ul>
            <li>Brand Films</li>
            <li>Product Videos</li>
            <li>Event Videography</li>
            <li>Social Media Reels</li>
            <li>Highlight & Promotional Videos</li>
          </ul>
          <a href="#contact" className="btn-outline">Contact Us</a>
        </div>
      </div>
    </section>

    {/* Social Media Content Section */}
    <section className="service-section">
      <h2>Social Media Content</h2>
      <div className="service-row reverse">
        <img src={placeholder} alt="Social Media Content" className="service-img-large" />
        <div className="service-info">
          <p>Strategic content that drives engagement and builds community.</p>
          <ul>
            <li>Content Planning</li>
            <li>Static Posts & Reels</li>
            <li>Motion Graphics</li>
            <li>Copywriting & Captions</li>
            <li>Monthly Content Calendars</li>
          </ul>
          <a href="#contact" className="btn-outline">Contact Us</a>
        </div>
      </div>
    </section>

    {/* Digital Illustration & Motion Graphics Section */}
    <section className="service-section">
      <h2>Digital Illustration & Motion Graphics</h2>
      <div className="service-row">
        <img src={placeholder} alt="Digital Illustration & Motion Graphics" className="service-img-large" />
        <div className="service-info">
          <p>Creative visuals that move people.</p>
          <ul>
            <li>Custom Illustrations</li>
            <li>Explainer Videos</li>
            <li>2D Animation</li>
            <li>Logo Animation</li>
            <li>Title & Text Effects</li>
          </ul>
          <a href="#contact" className="btn-outline">Contact Us</a>
        </div>
      </div>
    </section>

    {/* Why Choose Hobbs Section */}
    <section className="why-hobbs-section">
      <h2>Why Choose Hobbs?</h2>
      <ul>
        <li>Creative Strategy-First Approach</li>
        <li>Industry-Standard Equipment & Tools</li>
        <li>Fast Turnaround & Clear Communication</li>
        <li>Personalized Solutions Tailored to Your Brand</li>
      </ul>
    </section>
  </div>
);

export default Services;