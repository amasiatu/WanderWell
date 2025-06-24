import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Header() {
  return (
    <div style={{ position: 'relative', width: '100%', textAlign: 'left', marginTop: '45px' }}>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <img
          src={logo}
          alt="WanderWell Logo"
          style={{
          position: 'absolute',
          top: '-80px',
          left: '-10px',
          height: '120px', // adjust height as needed
          objectFit: 'contain',
          padding: '5px',
          borderRadius: '5px',
          }}
        />
      </div>
      <Link to="/map" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: 'bold',
            fontSize: '16px',
            right: '100px',
          }}>Interactive Map</Link>
    </div>
  );
}

export default Header;
