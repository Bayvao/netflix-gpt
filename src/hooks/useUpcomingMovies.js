import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES_URL } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIES_URL, API_OPTIONS);
    const json = await data.json();

    const upcomingMovies = {
      type: "Upcoming Movies",
      ...json,
    };

    dispatch(addUpcomingMovies(upcomingMovies));
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
