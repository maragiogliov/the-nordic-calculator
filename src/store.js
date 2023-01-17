import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    selectedCountry: ''
};

const store = configureStore({
    reducer: {
        selectedCountry: (state = initialState.selectedCountry, action) => {
            switch (action.type) {
                case 'SET_SELECTED_COUNTRY':
                    return action.payload;
                default:
                    return state;
            }
        }
    }
});

export default store;
