import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to PregnerKZ</h1>
          <p className="hero-subtitle">
            Your trusted partner for professional solutions in Kazakhstan
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast & Reliable</h3>
              <p>Quick turnaround time with consistent quality delivery</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Professional</h3>
              <p>Expert team with years of experience in the industry</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Quality Assured</h3>
              <p>Commitment to excellence in every project we undertake</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <p className="about-text">
            PregnerKZ is a leading provider of professional solutions in Kazakhstan. 
            We are dedicated to delivering exceptional services that help our clients 
            achieve their goals and grow their business.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-text">
            Ready to start your project? Contact us today!
          </p>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 PregnerKZ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
