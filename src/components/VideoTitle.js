import React from "react";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
			<h1 className="text-6xl font-bold">{title}</h1>
			<p className="py-6 text-md w-1/2 opacity-70">{overview}</p>
			<div className="mt-16">
				<button
					className="bg-white text-black 
          py-2 px-6 font-bold text-lg rounded-md hover:bg-gray-300">
					▶️ Play
				</button>
				<button
					className="bg-gray-500 text-white 
          py-2 px-8 mx-4 text-xl  bg-opacity-70 rounded-md hover:bg-opacity-40">
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
