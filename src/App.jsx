// src/App.jsx
import React, { useState, useEffect } from 'react';

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
      <Navigation 
        activeNav={activeNav}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <ServicesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

// Navigation Component
const Navigation = ({ activeNav, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
  const navItems = ['home', 'services', 'newsletter'];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <span className="logo-text">Assignment</span>
          </div>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <button
                key={item}
                className={`nav-link ${activeNav === item ? 'active' : ''}`}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      
      {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />}
    </>
  );
};

// Hero Section based on Figma design
const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content-left">
            <h1 className="hero-title">
              The thinkers and doers<br />
              were changing the status quo with
            </h1>
            <div className="hero-quote">
              <p className="quote-text">
                Be more than just<br />
                be better than today
              </p>
            </div>
            <button 
              className="hero-cta"
              onClick={() => scrollToSection('services')}
            >
              See how we can help you progress
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <div className="hero-content-right">
            <div className="hero-decoration">
              <div className="decoration-circle"></div>
              <div className="decoration-dots"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      title: 'Celebrate & partnership',
      description: 'Our unique value proposition'
    },
    {
      title: 'Fleeting digital connectivity',
      description: 'Shift our customer experience'
    },
    {
      title: 'Our unique value proposition',
      description: 'Shift our customer experience'
    },
    {
      title: 'Celebrate & partnership',
      description: 'Our unique value proposition'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What we can offer you!</h2>
          <div className="title-underline"></div>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-inner">
                <div className="service-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="service-link">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Newsletter Section
const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section id="newsletter" className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <h2>Subscribe to our newsletter</h2>
          <p>Stay updated with our latest news and offers</p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="newsletter-buttons">
              <button type="submit" className="btn-signup">Sign up</button>
              <button type="button" className="btn-login">Log in</button>
            </div>
          </form>
          {isSubmitted && <div className="success-message">Thanks for subscribing!</div>}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Assignment</h3>
            <p>Changing the status quo with innovative solutions.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#newsletter">Newsletter</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Assignment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default App;
