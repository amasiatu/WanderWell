import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import earth from '../assets/earth.avif'

function Header() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '10px 20px', // 🔽 reduce top/bottom padding
      marginTop: '10px',     // 🔽 less space from the top
      height: '70px',        // 🔽 set explicit height if needed
      width: '100%',
    }}>
      {/* Logo on the left */}
      <Link to="/">
        <img
          src={logo}
          alt="WanderWell Logo"
          style={{
            height: '120px',
            objectFit: 'contain',
            padding: '5px',
            borderRadius: '5px',
          }}
        />
      </Link>

      <Link to="/map" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textDecoration: 'none', 
        marginLeft: '78%',
        marginBottom: '30px'
      }}>
        <img 
          src={earth} 
          alt="Earth icon" 
          style={{ 
            height: '60px', // adjust size as needed
            marginBottom: '4px' 
          }} 
        />
        <span style={{ 
          color: '#003366', 
          fontWeight: 'bold', 
          fontSize: '16px' 
        }}>
          Interactive Map
        </span>
      </Link>

    </div>
  );
}

export default Header;
