import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../utils/appSlice"; // make sure the path is correct

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
