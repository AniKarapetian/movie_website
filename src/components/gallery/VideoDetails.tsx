import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import { useDispatch } from "react-redux";
import { getMovieByIdAsync } from "../../store/movies/movies-slice";
import { useSelector } from "react-redux";
import { movieSelector } from "../../store/movies/movies-selector";

const VideoDetails: React.FC = () => {
  //   const { id } = useParams<{ id: string }>();
  const id = "1";
  const movie = useSelector(movieSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getMovieByIdAsync(id) as any);
    }
  }, [id]);

  return (
    <div>
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <VideoPlayer videoUrl={movie.videoUrl} />
          <p>{movie.description}</p>
          <p>Year: {movie.year}</p>
          <p>Country: {movie.country}</p>
          <p>Rating: {movie.rating}</p>
          <p>Genres: {movie.genres.join(", ")}</p>
          <p>Actors: {movie.actors.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default VideoDetails;
