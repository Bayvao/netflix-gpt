import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    gptRecommendedMovieName: null,
    gptRecommendedMovieResults: null,
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTRecommendedMovies: (state, action) => {
      const { recommendedMovies, tmdbSearchResults } = action.payload;
      state.gptRecommendedMovieName = recommendedMovies;
      state.gptRecommendedMovieResults = tmdbSearchResults;
    },
  },
});

export const { toggleGPTSearchView, addGPTRecommendedMovies } =
  gptSlice.actions;
export default gptSlice.reducer;
