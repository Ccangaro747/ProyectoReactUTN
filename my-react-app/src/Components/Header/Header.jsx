import React, { useState } from 'react';
import './Header.css';
import '../global.css';

const Header = () => {
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isCloudServicesOpen, setCloudServicesOpen] = useState(false);

  const toggleServices = () => {
    setServicesOpen(!isServicesOpen);
    if (isCloudServicesOpen) {
      setCloudServicesOpen(false);
    }
  };

  const toggleCloudServices = () => {
    setCloudServicesOpen(!isCloudServicesOpen);
    if (isServicesOpen) {
      setServicesOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="menu">
        <ul className="menu-list">
          <li className='menu-item-center' onClick={toggleServices}>
            Services {isServicesOpen ? '▽' : '▽'}
            {isServicesOpen && (
              <ul className="submenu">
                <li>Submenu Item 1</li>
                <li>Submenu Item 2</li>
              </ul>
            )}
          </li>
          <li className='menu-item-center' onClick={toggleCloudServices}>
            Cloud Services {isCloudServicesOpen ? '▽' : '▽'}
            {isCloudServicesOpen && (
              <ul className="submenu">
                <li>Cloud Submenu Item 1</li>
                <li>Cloud Submenu Item 2</li>
              </ul>
            )}
          </li>
          <li className='menu-item-center'>Resources</li>
          <li className='menu-item-center'>Partners</li>
          <li className='menu-item-center'>Blog</li>
        </ul>
      </nav>
      <nav className='menu-items-contact'>
        <ul className="menu-items">
          <li className="menu-item1">About</li>
          <li className="menu-item2">Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


