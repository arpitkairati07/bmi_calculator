import './App.css'
import React, { useState } from 'react'

function App() {
  // State declarations
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState('');
  const [message, setMessage] = useState('');

  // Logic for calculating BMI
  let calbmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter valid details.');
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBMI(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage('You are underweight');
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage('You are healthy');
      } else {
        setMessage('You are overweight');
      }
    }
  };

  // Function to reload the page
  let reload = () => {
    window.location.reload();
  };

  return (
    <>
      <h2>BMI Calculator</h2>
      <form onSubmit={calbmi}>
        <div>
          <label htmlFor="weight">Enter your weight (lbs):</label>
          <input
            type="text"
            placeholder="Enter your weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="height">Enter your height (in inches):</label>
          <input
            type="text"
            placeholder="Enter your height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-light">
            Submit
          </button>
          <button type="button" className="btn btn-warning" onClick={reload}>
            Reload
          </button>
        </div>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </>
  );
}
export default App;
