import React from "react";
import IconPlayFill from "../utils/icons/IconPlayFill";
import IconInfo from "../utils/icons/IconInfo";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-md w-1/2 opacity-70">{overview}</p>
      <div className="flex items-center mt-14">
        <div>
          <button
            className="bg-white text-black 
          py-2 px-4 font-bold text-lg rounded-md hover:bg-gray-300"
          >
            <div className="flex items-center">
              <IconPlayFill />
              <span>Play</span>
            </div>
          </button>
        </div>
        <div>
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
