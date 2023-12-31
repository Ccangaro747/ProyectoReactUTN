import React from 'react';
import './CyberSecuritySection.css';
import "../global.css"; 
import '../../../src/index.css';

const CyberSecuritySection = () => {
  return (
    <section className="security-threats">
      <div className="left-content">
        <h1 className="title">Protect Your</h1>
        <h2 className='titletwo'>Cyber Security</h2>
        <div className="title-paragraph">
          <h3 className='titlethree'>Keep your software up to date:</h3>
          <p className="description">
            Regularly update your operating system, antivirus software, web browsers, and other applications
            to ensure you have the latest security patches.
          </p>
        </div>
      </div>
      <div className="right-content">
        <div className="image-container"></div>
      </div>
    </section>
  );
};

export default CyberSecuritySection;











