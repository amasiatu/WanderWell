import React, {useState, useEffect} from 'react'
import Header from './components/header';

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
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ marginTop: '20px', marginBottom: '20px', textAlign: 'center' }}>
        <Header />

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
                {/* Attribution */}
                {country.attribution_name && country.attribution_url && (
                  <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>
                    Photo by{' '}
                    <a
                      href={country.attribution_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#007bff', textDecoration: 'none' }}
                    >
                      {country.attribution_name}
                    </a>{' '}
                    on{' '}
                    <a
                      href="https://unsplash.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#007bff', textDecoration: 'none' }}
                    >
                      Unsplash
                    </a>
                  </p>
                )}
              </>
            )}
              
            {/* Render the country name */}
            {country.name}
          </div>
        ))}
      </div>
    </div>
      );
}
export default App