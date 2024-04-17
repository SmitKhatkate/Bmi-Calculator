import React,{useState} from "react";
import './Bmi.css';
function Bmi() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('');
  
    const calBmi = (e) => {
      e.preventDefault();
      if (weight === 0 || height === 0) {
        alert("Please enter valid weight and height value");
      } else {
        let bmi = (weight / (height * height) * 703);
        setBmi(bmi.toFixed(1));
      }
  
      if (bmi < 25) {
        setMessage("you are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("you are healthy weighted person");
      } else {
        setMessage("you are overweight");
      }
    };
  
    return (
      <div className="containerr">
        <h2>Bmi Calculator</h2>
        <form onSubmit={calBmi}>
          <div  className="firstrow">
            <label for="weight">Weight (lbs)</label>
            <input id="weight" type="number" 
            aria-label="Weight in lbs"
            placeholder="Enter weight"
            value={weight}
            onChange={ (e) => setWeight(e.target.value) }/>
          </div>
          <div className="secondtrow">
            <label for="height">Height (inch)</label>
            <input id="height" type="number"
            aria-label="Height in inches"
            placeholder="Enter height"
            value={height}
            onChange={ (e) => setHeight(e.target.value) }/>
          </div>
          <div className="btn-grp">
            <button className="btns" type="submit">Submit</button>
            <button className="btns" type="button" onClick={() => window.location.reload()}>Reload</button>
          </div>
          <div className="result">
            <h3>Your Bmi is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    );
  }
  export default Bmi;