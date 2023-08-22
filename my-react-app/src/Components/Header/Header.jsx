import React from 'react';
import './Header.css';
import "../global.css"; // Importa el archivo global.css si lo necesitas
import '../../../src/index.css'; // Importa otros archivos CSS si son necesarios

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="menu">
        <ul className="menu-list">
          <li className='menu-item-center'>Services</li>
          <li className='menu-item-center'>Cloud Services</li>
          <li className='menu-item-center'>Resources</li>
          <li className='menu-item-center'>Partners</li>
          <li className='menu-item-center'>Blog</li>
        </ul>
      </nav>
      <nav className='menu-items-contact'>
        <ul className="menu-items">
          <li className="menu-item">About</li>
          <li className="menu-item">Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
