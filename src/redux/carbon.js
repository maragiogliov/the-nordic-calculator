import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCountry: "USA",
  transportation: 0,
  electricity: 0,
  waste: 0,
  footprint: "",
  userElectricityFactor: null
};

export const carbonSlice = createSlice({
  name: "carbon",
  initialState,
  reducers: {
    selectCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
    setTransportation: (state, action) => {
      state.transportation = action.payload;
    },
    setElectricity: (state, action) => {
      state.electricity = action.payload;
    },
    setWaste: (state, action) => {
      state.waste = action.payload;
    },
    setFootprint: (state, action) => {
      state.footprint = action.payload;
    },
    setUserElectricityFactor: (state, action) => {
      state.userElectricityFactor = action.payload;
    }
  }
});

export const { selectCountry, setTransportation, setElectricity, setWaste, setFootprint, setUserElectricityFactor } = carbonSlice.actions;

export default carbonSlice.reducer;