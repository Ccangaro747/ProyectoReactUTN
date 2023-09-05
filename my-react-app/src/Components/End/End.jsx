import React from 'react';
import './End.css';
import imagen1 from '../../Redes/twitter.png';
import imagen2 from '../../Redes/facebook.png';
import imagen3 from '../../Redes/linkedin.png';
import imagen4 from '../../Redes/instagram.png';

const End = () => {
  return (
    <section className="end-section">
      <div className="column">
        <div className="left-content">
          <div className="logoend">Logo
          <p className='parrafologo'>4 Inverness Court East Suite 300 Englewood, Colorado 80112</p>
          <p className='parrafologo'>844.849.8440|303.217.7001</p>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="middle-content">
          <div className="services">
            <p>Managed IT SERVICES</p>
            <p>Cloud</p>
            <p>Security</p>
            <p>Automation</p>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="middle-contenttwo">
          <div className="contact">
            <p>Contact Technical Support</p>
            <p>Contact Sales</p>
            <p>Security</p>
            <p>Client Portal</p>
          </div>
        </div>
      </div>
      <div className="columncontact">
        <div className="right-content">
          <p className='parrafocontact'>ADDRESS: Satkhira, Kaliganj, BD </p>
          <p className='parrafocontactemail'>EMAIL: @gmail.com </p>
          <p className='parrafocontactphone'>PHONE: +54-2324505896 </p>
        </div>
      </div>
      <div className="column">
        <div className="newsletter">
          <h3 className="titlenew">Newsletter</h3>
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
          <div className="social-icons">
            <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={imagen2} alt="Facebook" />
            </a>
            <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={imagen1} alt="Twitter" />
            </a>
            <a href="http://Www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={imagen3} alt="Linkedin" style={{ width: '15px', height: '16px' }} />
            </a>
            <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={imagen4} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default End;



