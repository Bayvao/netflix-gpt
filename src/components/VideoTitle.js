import React from "react";
import IconPlayFill from "../utils/icons/IconPlayFill";
import IconInfo from "../utils/icons/IconInfo";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-md w-1/2 opacity-70">
        {overview}
      </p>
      <div className="flex items-center mt-14">
        <div className="my-1 md:my-0">
          <button
            className="bg-white text-black 
          py-1 md:py-2 px-3 md:px-4 font-semibold md:font-bold text-md md:text-lg rounded-md hover:bg-gray-300"
          >
            <div className="flex items-center">
              <IconPlayFill />
              <span>Play</span>
            </div>
          </button>
        </div>
        <div className="hidden md:inline-block">
          <button
            className="bg-gray-500 text-white 
          py-2 px-6 mx-4 text-xl  bg-opacity-70 rounded-md hover:bg-opacity-40"
          >
            <div className="flex items-center">
              <IconInfo />
              <span className="ml-1 font-medium">More Info</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
