import React, { useState } from 'react';


const CarbonFootprintCalculator = () => {
  // state to hold input values
  const [transportation , setTransportation] = useState(0);
  const [electricity, setElectricity] = useState(0);
  const [waste, setWaste] = useState(0);
  const [footprint, setFootprint] = useState('');
  const [selectedCountry, setSelectedCountry] = useState("USA");
  const countries = ["USA", "Canada", "Mexico", "France", "Germany"];

  const countryFactors = {
      USA: {electricity_factor:0.1908, food_waste_factor:1.5 },
      Canada: {electricity_factor:0.2108, food_waste_factor:1.3 },
      Mexico: {electricity_factor:0.1708, food_waste_factor:1.7 },
      France: {electricity_factor:0.1508, food_waste_factor:1.4 },
      Germany: {electricity_factor:0.2108, food_waste_factor:1.2 }
  };


  // function to handle input changes
  const handleTransportationChange = (e) => setTransportation(parseFloat(e.target.value));
  const handleElectricityChange = (e) => setElectricity(parseFloat(e.target.value));
  const handleWasteChange = (e) => setWaste(parseFloat(e.target.value));
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
}


  // function to calculate carbon footprint
  const calculateFootprint = () => {
    if (isNaN(parseFloat(transportation)) || isNaN(parseFloat(electricity)) || isNaN(parseFloat(waste))) {
        setFootprint("Please enter a valid number.");
    } else {
        let total = parseFloat(transportation) + parseFloat(electricity) * countryFactors[selectedCountry].electricity_factor;
        total += parseFloat(waste) * countryFactors[selectedCountry].food_waste_factor;
        setFootprint(total.toFixed(2));
    }
}

  return (
      <div>
          <h1>Carbon Footprint Calculator</h1>
          <label>Country: 
            <select value={selectedCountry} onChange={handleCountryChange}>
                {countries.map((country) => (
                    <option key={country} value={country}>
                        {country}
                    </option>
                ))}
            </select>
          </label>
          <br />
          <label>Transportation: <input type="number" value={transportation || ""} onChange={handleTransportationChange} /></label>
          <br />
          <label>Electricity: <input type="number" value={electricity || ""} onChange={handleElectricityChange} /></label>
          <br />
          <label>Waste: <input type="number" value={waste || ""} onChange={handleWasteChange} /></label>
          <br />
          <button onClick={calculateFootprint}>Calculate</button>
          <h1>{footprint}</h1>
      </div>
  )
 }

 export default CarbonFootprintCalculator