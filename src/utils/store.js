import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../utils/appSlice";
import searchReducer from "../utils/searchSlice"; // ✅ added

const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer, // ✅ added search reducer
  },
});

export default store;
