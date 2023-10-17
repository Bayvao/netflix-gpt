import React, { useRef } from "react";
import { useSelector } from "react-redux";
import language from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";

const GPTSearchBar = () => {
  const preferredLanguage = useSelector(
    (store) => store.selectedLanguage.selectedLanguage
  );

  const searchText = useRef(null);

  const handleGPTSearch = async () => {
    const text = searchText.current.value;

    // Make an API call to GPT API and get movie results
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      text +
      ". Only give me names of 10 movies, comma separated like the example result given ahead." +
      " Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya, Main Hoon Na, Jawaan, Dil Dhadakne Do, Krrish, Tiger Zinda Hai.";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const recommendedMovies =
      gptResults?.choices[0]?.message?.content.split(", ");

    const promiseArray = recommendedMovies.map((movieName) =>
      fetchMoviesFromTMDB(movieName)
    );
    // [Promise, Promise, Promise, Promise, ...]

    const tmdbSearchResults = await Promise.all(promiseArray);
    console.log(tmdbSearchResults);
  };

  const fetchMoviesFromTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-md"
          placeholder={language[preferredLanguage].placeholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4  bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearch}
        >
          {language[preferredLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
