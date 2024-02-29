import React from "react";
import { Card, Button } from "react-bootstrap";
import { MovieDTO } from "./types";
// import { useHistory } from "react-router-dom";

interface VideoCardProps {
  movie: MovieDTO;
}

const VideoCard: React.FC<VideoCardProps> = ({ movie }) => {
  // const history = useHistory();
  const openDetails = () => {
    // history.push(`/movies/${movie.id}`);
  };
  return (
    <Card style={{ width: "18rem", margin: "5px" }}>
      <Card.Img variant="top" src={movie.imageUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          <strong>Year:</strong> {movie.year}
        </Card.Text>
        <Card.Text>
          <strong>Rating:</strong> {movie.rating}
        </Card.Text>
        <Button variant="primary" onClick={openDetails}>
          Watch
        </Button>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;
