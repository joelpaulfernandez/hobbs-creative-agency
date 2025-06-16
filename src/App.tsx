import React, { useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';

const App: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="app-container">
        {/* Hero Section - Inspired by Sandbox Creative */}
        <section className="hero-section">
          <div className="hero-wrapper">
            <div className="w-layout-blockcontainer container w-container">
              <div className="hero-header">
                <div className="tag-wrapper">
                  <div className="elipse hide-mobile"></div>
                  <div className="tag"><p className="text-weight-medium caps">we are hobbs</p></div>
                  <div className="elipse hide-mobile"></div>
                </div>
                <div className="heading"><h1 className="heading-1">Elevate your brand with creative solutions</h1></div>
              </div>
            </div>
            <div className="hero-interaction-wrapper">
              <div className="hero-card first"><img src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66fa93b7010975c6564112ea_Images%20Hero%2001.jpg" loading="lazy" alt="Hero Image" className="image"/></div>
              <div className="hero-card second"><img src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66fa93b709501e1825fa0891_Images%20Hero%2002.jpg" loading="lazy" alt="Hero Image" className="image"/></div>
              <div className="hero-card third"><img src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66fa93b7c6d1a72c0dc53f3b_Images%20Hero%2003.jpg" loading="lazy" alt="Hero Image" className="image"/></div>
            </div>
            <div className="hero-component">
              <div className="hero-content">
                <div className="hero-left-content">
                  <p className="text-size-small caps">Where Imagination Meets</p>
                  <p className="text-size-small caps">Strategy to Impactful Results</p>
                </div>
                <div className="hero-button">
                  <a href="#contact" className="button-hero w-inline-block">
                    <div className="text-weight-medium">contact@hobbs.com</div>
                    <div className="button-line-wrap"><div className="button-line-animation"></div></div>
                  </a>
                </div>
              </div>
              <div className="hero-big-text">
                <div className="hero-marquee">
                  <div className="text-size-display">HOBBS CREATIVE AGENCY</div>
                  <div className="big-elipse"></div>
                </div>
                <div className="hero-marquee">
                  <div className="text-size-display">HOBBS CREATIVE AGENCY</div>
                  <div className="big-elipse"></div>
                </div>
                <div className="hero-marquee">
                  <div className="text-size-display">HOBBS CREATIVE AGENCY</div>
                  <div className="big-elipse"></div>
                </div>
                <div className="hero-marquee">
                  <div className="text-size-display">HOBBS CREATIVE AGENCY</div>
                  <div className="big-elipse"></div>
                </div>
              </div>
            </div>
            <div className="hero-grid"><img src="https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5a43e83a41d9f75c52a49_Hero%20Background%20Grid.svg" loading="lazy" alt="Hero Grid"/></div>
          </div>
        </section>

        {/* About Section - Inspired by Sandbox Creative */}
        <section className="about-section">
          <div className="container">
            <div className="about-header">
              <p className="about-intro-text">we are hobbs</p>
              <h2 className="about-main-heading">Elevate your digital presence with distinction, immerse in boundless creativity. Our team of designers and development trailblazers ignites your digital vision.</h2>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <h3>3+</h3>
                <p>Years of experience</p>
              </div>
              <div className="stat-item">
                <h3>40+</h3>
                <p>Satisfied clients</p>
              </div>
              <div className="stat-item">
                <h3>100+</h3>
                <p>Projects delivered</p>
              </div>
            </div>

            <div className="services-overview">
              <div className="service-item">
                <span className="service-number">01</span>
                <h3>Transform your business identity through expert branding strategies</h3>
                <p>Elevate your brand's presence with tailored solutions that resonate with your brand</p>
              </div>
              <div className="service-item">
                <span className="service-number">02</span>
                <h3>Unlock innovative web solutions with cutting-edge development</h3>
                <p>Our team crafts seamless digital experiences to drive results and business growth</p>
              </div>
              <div className="service-item">
                <span className="service-number">03</span>
                <h3>Design intuitive user interfaces for exceptional user experiences</h3>
                <p>We create user-centered designs that enhance engagement and usability</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section">
          <div className="container">
            <h2>Selected Work</h2>
            <div className="projects-grid">
              {/* Project Card 1 */}
              <div className="project-card">
                <div className="project-thumbnail"></div>
                <h3>GRO-OP</h3>
                <p>Focused on sustainable growth strategies, empowering businesses to thrive through innovation.</p>
              </div>
              {/* Project Card 2 */}
              <div className="project-card">
                <div className="project-thumbnail"></div>
                <h3>Journey of Objects</h3>
                <p>Showcasing the evolution of everyday items through a creative and minimalist lens.</p>
              </div>
              {/* Project Card 3 */}
              <div className="project-card">
                <div className="project-thumbnail"></div>
                <h3>Steeezy</h3>
                <p>Steeezy redefines the intersection of fashion and digital experiences with sleek, modern aesthetics.</p>
              </div>
              {/* Add more project cards as needed */}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <footer className="contact-cta">
          <div className="container">
            <p>Let's build something together.</p>
            <button className="get-in-touch-button">Get in touch</button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
