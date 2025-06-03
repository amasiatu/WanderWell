import React from 'react';
import ireland from '../assets/ireland.jpg';
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
      <img
        src={ireland}
        alt="Explore WanderWell"
        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
      />
      <h1
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '30%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '50px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
          margin: 0,
          padding: '0 10px'
        }}
      >
        Explore places on WanderWell
      </h1>
    </div>
  );
}

export default Header;
