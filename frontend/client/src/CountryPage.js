import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import './CountryPage.css';

function CountryPage() {
  const { countryCode } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/country/${countryCode}`)
      .then(res => res.json())
      .then(data => {
        setCountry(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [countryCode]);

  if (loading) return <p>Loading...</p>;
  if (!country || country.error) return <p>Country not found</p>;

  return (
    <>
      <Header />
      <main className="country-page">
        <img src={country.image_url} alt={`Flag of ${country.name}`} />
        <h1>{country.name}</h1>

        <div className="info-container">
          <div className="info-box">
            <div className="info-item">
              <strong>Capital:</strong>
              <span>{country.capital || 'N/A'}</span>
            </div>
            <div className="info-item">
              <strong>Region:</strong>
              <span>{country.region || 'N/A'}</span>
            </div>
            <div className="info-item">
              <strong>Language:</strong>
              <span>{country.language || 'N/A'}</span>
            </div>
            <div className="info-item">
              <strong>Currency:</strong>
              <span>{country.currency || 'N/A'}</span>
            </div>
            <div className="info-item budget">
              <strong>Budget:</strong>
              <span>{country.budget || 'N/A'}</span>
            </div>
            <div className="info-item">
              <strong>Average Temperature:</strong>
              <span>{country.avg_temp || 'Unknown'}</span>
            </div>
          </div>

          <div className="info-box">
            <div className="info-item">
              <strong>Passport Validity:</strong>
              <span>{country.passport_friendly || 'Unknown'}</span>
            </div>
            <div className="info-item">
              <strong>Transport Friendly:</strong>
              <span>{country.transport_friendly ? 'Yes' : 'No'}</span>
            </div>
            <div className="info-item">
              <strong>Safe Areas:</strong>
              <span>
                {country.safety?.safe_areas?.length > 0
                  ? country.safety.safe_areas.join(', ')
                  : 'No data'}
              </span>
            </div>
            <div className="info-item">
              <strong>Unsafe Areas:</strong>
              <span>
                {country.safety?.unsafe_areas?.length > 0
                  ? country.safety.unsafe_areas.join(', ')
                  : 'No data'}
              </span>
            </div>
            <div className="info-item">
              <strong>Tourist Attractions:</strong>
              <span>
                {country.tourist_attractions && country.tourist_attractions.length > 0
                  ? country.tourist_attractions.join(', ')
                  : 'No data'}
              </span>
            </div>
            <div className="info-item">
              <strong>Food:</strong>
              <span>
                {country.food && country.food.length > 0
                  ? country.food.join(', ')
                  : 'No data'}
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CountryPage;
