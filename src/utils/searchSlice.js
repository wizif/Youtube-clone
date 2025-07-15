// utils/searchSlice.js

import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {}, // ✅ must be an object, not undefined
  reducers: {
    cacheResults: (state, action) => {
      Object.assign(state, action.payload); // ✅ correct state mutation
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
