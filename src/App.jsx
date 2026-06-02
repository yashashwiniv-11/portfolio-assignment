import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveNav(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <span className="logo-text">Assignment</span>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <button className={`nav-link ${activeNav === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}>Home</button>
            <button className={`nav-link ${activeNav === 'services' ? 'active' : ''}`} onClick={() => scrollToSection('services')}>Services</button>
            <button className={`nav-link ${activeNav === 'newsletter' ? 'active' : ''}`} onClick={() => scrollToSection('newsletter')}>Newsletter</button>
          </div>
          <button className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      
      <main>
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">The thinkers and doers<br />were changing the status quo with</h1>
              <div className="hero-quote">
                <p className="quote-text">Be more than just<br />be better than today</p>
              </div>
              <button className="hero-cta" onClick={() => scrollToSection('services')}>
                See how we can help you progress
              </button>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">What we can offer you!</h2>
              <div className="title-underline"></div>
            </div>
            <div className="services-grid">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="service-card">
                  <h3>Celebrate & partnership</h3>
                  <p>Our unique value proposition</p>
                  <button className="service-link">Learn more →</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="newsletter" className="newsletter">
          <div className="container">
            <div className="newsletter-content">
              <h2>Subscribe to our newsletter</h2>
              <p>Stay updated with our latest news and offers</p>
              <div className="newsletter-buttons">
                <button className="btn-signup">Sign up</button>
                <button className="btn-login">Log in</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Assignment</h3>
              <p>Changing the status quo with innovative solutions.</p>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Assignment. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
