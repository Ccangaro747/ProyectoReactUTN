import React from 'react';
import './SecurityThreats.css';
import imagen from '../../Imágenes/imagendos.png';
import '../global.css';
import '../../../src/index.css';

const SecurityThreats = () => {
  return (
    <div className="security-threats">
      <div className="security-image">
        <img className='imagendos' src={imagen} alt="" />
      </div>
      <div className="security-content">
        <h1 className='title'>Tackling Modern<br />Security Threats</h1>
        <p className='parrafo'>
          In today's fast-moving business environment, companies are faced with a number of challenges when it comes to information technology and ensuring their employees can stay productive and secure. Cyberthreats like phishing and ransomware are causing businesses.
        </p>
        <h2 className='titleimpact'>Impact to Business</h2>
        <p className='parrafoimpact'>
          Cybersecurity breaches can have severe impacts on businesses. They can result in financial losses due to stolen funds and operational disruptions, as well as damage a company's reputation, leading to a loss of customer trust and decreased sales.
        </p>
        <div className="statistics">
          <div className="statistic">
            <div className="statistic-header">
              <h3>Alarming Statistics</h3>
              <span className="sticker">Sticker</span>
            </div>
            <p>1 in 4 SMB's is the victim of a cyberattack.</p>
          </div>
          <div className="statistic">
            <div className="statistic-header">
              <h3>Prime Perpetrator</h3>
              <span className="sticker">Sticker</span>
            </div>
            <p>91% of cyberattacks begin with a phishing email message.</p>
          </div>
          <div className="statistic">
            <div className="statistic-header">
              <h3>Costly Consequences</h3>
              <span className="sticker">Sticker</span>
            </div>
            <p>33% spent more resolving the problem than it would cost to prevent it.</p>
          </div>
          <div className="statistic">
            <div className="statistic-header">
              <h3>Resource Deficiency</h3>
              <span className="sticker">Sticker</span>
            </div>
            <p>62% of SMB's lack security staff to deal with security issues.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityThreats;



