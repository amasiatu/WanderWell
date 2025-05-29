import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    fetch('http://127.0.0.1:5000/home').then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      })
  },[])

  return (
    <div>
      <h1>Traveler Info</h1>
      {data ? (
        <ul>
          <li><strong>Name:</strong> {data.Name}</li>
          <li><strong>Age:</strong> {data.Age}</li>
          <li><strong>Date:</strong> {data.Date}</li>
          <li><strong>Major:</strong> {data.Major}</li>
          <li><strong>Travel Habits:</strong> {data["Travel Habits"]}</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
export default App