import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';

function TopBar() {
  return (
    <div className="topbar" style={{ backgroundColor: '#9B9B9B', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', }}>
      <div className="left-content">
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Durga Bhawan, Anamnagar, Kathmandu</p>
        <p><FontAwesomeIcon icon={faClock} /> Sun - Fri : 09.00 AM - 06.00 PM</p>
      </div>
      <div className="right-content" style={{ display: 'flex', alignItems: 'center' }}>
        <p><FontAwesomeIcon icon={faPhone} /> Contact: 01-4102710</p>
        <div className="social-links" style={{ marginLeft: '20px' }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/30x30" alt="Facebook" style={{ marginRight: '10px' }} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/30x30" alt="Instagram" style={{ marginRight: '10px' }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
