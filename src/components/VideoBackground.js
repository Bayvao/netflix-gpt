import React from "react";
import { YOUTUBE_EMBED_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import useFetchTrailerVideo from "../hooks/useFetchTrailerVideo";

const VideoBackground = ({ movieId }) => {
	const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

	useFetchTrailerVideo(movieId);

	return (
		<div className="w-screen">
			<iframe
				className="w-screen aspect-video"
				src={
					YOUTUBE_EMBED_URL +
					trailerVideo?.key +
					"?autoplay=1&mute=1&color=white"
				}
				frameBorder={0}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
		</div>
	);
};

export default VideoBackground;
