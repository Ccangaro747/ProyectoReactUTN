import React from 'react';
import './PartnersContact.css';
import imagen1 from '../../Tarjetas/1.png';
import imagen2 from '../../Tarjetas/2.png';
import imagen3 from '../../Tarjetas/3.png';
import imagen4 from '../../Tarjetas/4.png';
import imagen5 from '../../Tarjetas/5.png';
import imagen6 from '../../Tarjetas/6.png';
import imagen7 from '../../Tarjetas/7.png';
import imagen8 from '../../Tarjetas/8.png';
import imagen9 from '../../Tarjetas/9.png';

const PartnersContact = () => {
  const creditCardImages = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9];

  return (
    <section className="footer">
      <div className="left-content">
        <h2 className="small-title">Join Us And Enjoy Solutions From The Industry's Leading Vendors</h2>
        <h2 className="large-title">Our Solutions Partners</h2>
        <p className="description-partners">
          We've Partnered With The Best Vendors In The Industry
          To Provide Our Clients With A Business Platform That
          Accelerates Growth, Protects Critical Data, And Enables
          Collaboration Between Employees, Clients, And Vendors.
        </p>
      </div>
      <div className="right-content">
        <div className="credit-card-icons">
          {creditCardImages.map((image, index) => (
            <img key={index} className={`credit-card-${index + 1}`} src={image} alt={`Credit Card ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersContact;




