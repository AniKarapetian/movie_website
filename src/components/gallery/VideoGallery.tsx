import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  filteredMovieSelector,
  moviesSelector,
} from "../../store/movies/movies-selector";
import VideoCard from "./VideoCard";
import { Container } from "react-bootstrap";
import VideoFilterSort from "./VideoFilterSort";
import { getMoviesAsync } from "../../store/movies/movies-slice";
import { useAppDispatch } from "../../store/store";
import { MovieDTO } from "./types";

const VideoGallery: FC = () => {
  const [list, setList] = useState<MovieDTO[]>([]);
  const movies = useSelector(moviesSelector);
  const filteredMovies = useSelector(filteredMovieSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMoviesAsync());
  }, [dispatch]);

  useEffect(() => {
    setList(movies);
  }, [movies]);

  useEffect(() => {
    setList(filteredMovies);
  }, [filteredMovies]);
  return (
    <div>
      <VideoFilterSort />
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          padding: "10px",
        }}
      >
        {!!list.length &&
          list.map((movie, index) => <VideoCard movie={movie} key={index} />)}
      </Container>
    </div>
  );
};

export default VideoGallery;
