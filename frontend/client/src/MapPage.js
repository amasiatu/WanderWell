import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import Header from './components/header'

const MapPage = () => {
  const [geoData, setGeoData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://127.0.0.1:5000/map') // Your Flask backend route
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(err => console.error('Error loading map data:', err));
  }, []);

  const onEachCountry = (feature, layer) => {
    const code = feature.properties.ISO_A2?.toLowerCase(); // or .ADMIN for name
    layer.on({
      click: () => {
        if (code) navigate(`/country/${code}`);
      },
    });
    layer.bindPopup(feature.properties.ADMIN); // country name popup
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Interactive Map Page</h2>
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '90vh' }}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='© OpenStreetMap'
      />
      {geoData && <GeoJSON data={geoData} onEachFeature={onEachCountry} />}
    </MapContainer>
    </div>
  );
};

export default MapPage;
