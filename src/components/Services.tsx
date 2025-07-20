import React from 'react';

const Services: React.FC = () => (
  <div className="services-page" style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
    <h1>Our Services</h1>
    <h2 style={{ fontWeight: 400, color: '#888' }}>Where Creativity Meets Purpose</h2>
    <p style={{ marginBottom: '2rem' }}>
      At Hobbs Creative Space, we bring your vision to life through innovative design, compelling storytelling, and bold branding. From concept to execution, we offer a full suite of creative services designed to elevate your brand and connect with your audience.
    </p>
    <section style={{ marginBottom: '2rem' }}>
      <h3>Branding & Design</h3>
      <p>Crafting brand identities that speak louder than words.</p>
      <ul>
        <li>Logo Design</li>
        <li>Brand Kits (Colors, Typography, Guidelines)</li>
        <li>Corporate Stationery</li>
        <li>Packaging Design</li>
        <li>Visual Identity Systems</li>
      </ul>
    </section>
    <section style={{ marginBottom: '2rem' }}>
      <h3>Photography</h3>
      <p>Telling your brand story frame by frame.</p>
      <ul>
        <li>Product Photography</li>
        <li>Lifestyle & Fashion Shoots</li>
        <li>Food Photography</li>
        <li>Corporate Portraits</li>
        <li>Event Coverage</li>
      </ul>
    </section>
    <section style={{ marginBottom: '2rem' }}>
      <h3>Videography</h3>
      <p>Cinematic visuals that make an impact.</p>
      <ul>
        <li>Brand Films</li>
        <li>Product Videos</li>
        <li>Event Videography</li>
        <li>Social Media Reels</li>
        <li>Highlight & Promotional Videos</li>
      </ul>
    </section>
    <section style={{ marginBottom: '2rem' }}>
      <h3>Social Media Content</h3>
      <p>Strategic content that drives engagement and builds community.</p>
      <ul>
        <li>Content Planning</li>
        <li>Static Posts & Reels</li>
        <li>Motion Graphics</li>
        <li>Copywriting & Captions</li>
        <li>Monthly Content Calendars</li>
      </ul>
    </section>
    <section style={{ marginBottom: '2rem' }}>
      <h3>Digital Illustration & Motion Graphics</h3>
      <p>Creative visuals that move people.</p>
      <ul>
        <li>Custom Illustrations</li>
        <li>Explainer Videos</li>
        <li>2D Animation</li>
        <li>Logo Animation</li>
        <li>Title & Text Effects</li>
      </ul>
    </section>
  </div>
);

export default Services; 