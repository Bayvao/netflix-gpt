import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { IMG_BKGRND_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen md:h-full object-cover"
          src={IMG_BKGRND_URL}
          alt="logo"
        />
      </div>
      <div className="pt-[25%] md:p-0">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </>
  );
};

export default GPTSearch;
