import React, {useState, useEffect} from 'react'
import Header from './components/header';
import ireland from './assets/ireland.jpg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapPage from './MapPage';


function App() {
const [countries, setCountries] = useState([]);
  const [sortMethod, setSortMethod] = useState('popular');
  const [filterType, setFilterType] = useState('all');

  // Fetch countries on mount
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/home?sort=${sortMethod}&type=${filterType}`)
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        console.log('Fetched countries:', data);
      })
      .catch(err => console.error(err));
  }, [sortMethod, filterType]);

  return (
    <Router>
    <Routes>
      {/* Home page */}
      <Route path="/" element={
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ marginTop: '20px', marginBottom: '20px', textAlign: 'center' }}>
        <Header />
        <img
                src={ireland}
                alt="Explore WanderWell"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
              <h1
                style={{
                  position: 'absolute',
                  bottom: '38%',
                  left: '27%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                  fontSize: '45px',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                  margin: 0,
                  padding: '0 10px'
                }}
              >
                Explore places on WanderWell
              </h1>
        {/* Sort and Filter Controls */}
        <div style={{ marginBottom: '20px',textAlign: 'center' }}>
          <label htmlFor="sort">Sort Places By:</label>
          <select
            id="sort"
            value={sortMethod}
            onChange={(e) => setSortMethod(e.target.value)}
            style={{ marginLeft: '10px' }}
          >
            <option value="popular">Most Popular</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>

          <label htmlFor="filter" style={{ marginLeft: '30px' }}>
            Filter by type of place:
          </label>
          <select
            id="filter"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            style={{ marginLeft: '10px' }}
          >
            <option value="country">Country</option>
            <option value="city">City</option>
          </select>
        </div>
      </div>
      {/* Country List */}
      <div
      style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap', // allows wrapping on smaller screens
        }}
      >
        {countries.map((country, index) => (
          <div
            key={index}
            style={{
              display: 'inline-block',
              margin: '10px',
              padding: '10px 20px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9',
            }}
          >
            {/* Render the country image */}
            {country.image_url && (
              <>
                <img
                  src={country.image_url}
                  alt={`Scenery of ${country.name}`}
                  style={{
                    width: '100%',
                    height: '120px',
                    objectFit: 'cover',
                    borderRadius: '5px',
                    marginBottom: '10px',
                  }}
                />             
              </>
            )}
            {/* Render the country name */}
            {country.name}
          </div>
        ))}
      </div>
    </div>
    } />

      {/* Map page */}
      <Route path="/map" element={<MapPage />} />
    </Routes>
  </Router>
      );
}
export default App