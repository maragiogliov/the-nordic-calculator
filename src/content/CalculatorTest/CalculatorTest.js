import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectCountry, setTransportation, setElectricity, setWaste, setFootprint } from "../../redux/carbon";

const CarbonFootprintCalculator = () => {
  const { selectedCountry, transportation, electricity, waste, footprint } = useSelector(
    (state) => state.carbon
  );
  const dispatch = useDispatch();
  const countries = ["USA", "Canada", "Mexico", "France", "Germany"];


  const countryFactors = {
      USA: {electricity_factor:0.1908, food_waste_factor:1.5 },
      Canada: {electricity_factor:0.2108, food_waste_factor:1.3 },
      Mexico: {electricity_factor:0.1708, food_waste_factor:1.7 },
      France: {electricity_factor:0.1508, food_waste_factor:1.4 },
      Germany: {electricity_factor:0.2108, food_waste_factor:1.2 }
  };


  // function to handle input changes
  const handleTransportationChange = (e) => {
    dispatch(setTransportation(parseFloat(e.target.value)));
  };
  const handleElectricityChange = (e) => {
    dispatch(setElectricity(parseFloat(e.target.value)));
  };
  const handleWasteChange = (e) => {
    dispatch(setWaste(parseFloat(e.target.value)));
  };
  const handleCountryChange = (e) => {
    dispatch(selectCountry(e.target.value));
  };



const calculateFootprint = () => {
  if (
    isNaN(parseFloat(transportation)) ||
    isNaN(parseFloat(electricity)) ||
    isNaN(parseFloat(waste))
  ) {
    dispatch(setFootprint("Please enter a valid number."));
  } else {
    let total =
      parseFloat(transportation) +
      parseFloat(electricity) * countryFactors[selectedCountry].electricity_factor;
    total +=
      parseFloat(waste) * countryFactors[selectedCountry].food_waste_factor;
    dispatch(setFootprint(total.toFixed(2)));
  }
};
return (
  <div>
    <h1>Carbon Footprint Calculator</h1>
    <label>
      Country:
      <select value={selectedCountry} onChange={handleCountryChange}>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </label>
    <br />
    <label>
      Transportation:{" "}
      <input
        type="number"
        value={transportation || ""}
        onChange={handleTransportationChange}
      />
    </label>
    <br />
    <label>
      Electricity:{" "}
      <input
        type="number"
        value={electricity || ""}
        onChange={handleElectricityChange}
        />
      </label>
      <br />
      <label>
        Waste: <input type="number" value={waste || ""} onChange={handleWasteChange} />
      </label>
      <br />
      <button onClick={calculateFootprint}>Calculate</button>
      <h1>{footprint}</h1>
    </div>
  );
 }

export default CarbonFootprintCalculator;