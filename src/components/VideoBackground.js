import React, { useEffect, useState } from "react";
import { API_OPTIONS, YOUTUBE_EMBED_URL } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const [trailerVideo, setTrailerVideo] = useState(null);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data?.json();

    const filteredData = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData?.length ? filteredData[0] : json.results[0];

    setTrailerVideo(trailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          YOUTUBE_EMBED_URL +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&playlist=" +
          trailerVideo?.key +
          "&loop=1&showinfo=0&controls=0"
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
