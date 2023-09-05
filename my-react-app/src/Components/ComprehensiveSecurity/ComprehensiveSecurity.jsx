import React from 'react';
import './ComprehensiveSecurity.css';
import imagen from '../../Imágenes/imagentres.png';

const ComprehensiveSecurity = () => {
  return (
    <div className="comprehensive-security">
      <div className="comprehensive-content">
        <h1 className='title'>Comprehensive Security To Protect Your Business</h1>
        <br />
        <p>
          The mPOWER CloudSecure Suite is a comprehensive solution that provides a secure, modern ecosystem for your business managed by our certified professionals.
        </p>
        <p>
          Based on Microsoft 365 and complimented by the industry's leading security solutions, we've specifically designed our security suite to empower your employees, safeguard your business data, and simplify your IT.
        </p>
        <p>
          The mPOWER CloudSecure Suite provides your business with the protection you need to combat today's emerging cybersecurity threats and provides a foundation for achieving industry best practices for HIPAA, PCI, and GDPR.
        </p>
      </div>
      <div className="comprehensive-image">
      <img className='imagentres' src={imagen} alt=""/>
      </div>
    </div>
  );
};

export default ComprehensiveSecurity;

