import { createSlice } from "@reduxjs/toolkit";

const langConfigSlice = createSlice({
  name: "selectedLanguage",
  initialState: {
    selectedLanguage: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { changeLanguage } = langConfigSlice.actions;
export default langConfigSlice.reducer;
