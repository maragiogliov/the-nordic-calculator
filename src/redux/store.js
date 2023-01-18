import { configureStore } from "@reduxjs/toolkit";
import carbonReducer from "./carbon";
import counterReducer from "./counter";

export default configureStore({
  reducer: {
    counter: counterReducer,
    carbon: carbonReducer
  }
});