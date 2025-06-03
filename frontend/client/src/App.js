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
            {country.name}
          </div>
        ))}
      </div>
    </div>
      );
}
export default App