import React from 'react';
import './End.css';

const End = () => {
  return (
    <section className="end-section">
      <div className="left-content">
        <div className="logo">LOGO</div>
        <p>4 Inverness Court East Suite <br />300 Englewood, Colorado 80112</p>
        <p>844.849.8440 | 303.217.7001</p>
      </div>
      <div className="middle-content">
        <div className="services">
          <p>Managed IT SERVICES</p>
          <p>Cloud</p>
          <p>Security</p>
          <p>Automation</p>
        </div>
        </div>
        <div className="middle-contenttwo">
        <div className="contact">
          <p>Contact Technical Support</p>
          <p>Contact Sales</p>
          <p>Security</p>
          <p>Client Portal</p>
        </div>
      </div>
      <div className="right-content">
        <p>ADDRESS: CAMILO CANGARO</p>
        <p>EMAIL: ASD@GMAIL.COM</p>
        <p>PHONE: 23232232</p>
        <div className="newsletter">
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div className="social-icons">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </section>
  );
}

export default End;

