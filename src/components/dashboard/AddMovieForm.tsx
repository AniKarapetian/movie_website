import React, { FC, useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { MovieDTO } from "../gallery/types";
import { useDispatch } from "react-redux";
import { addMovieAsync } from "../../store/movies/movies-slice";

const AddMovieForm: FC = () => {
  const dispatch = useDispatch();
  const [newMovie, setNewMovie] = useState<MovieDTO>({
    id: `${Date.now()}`,
    title: "",
    description: "",
    year: 0,
    country: "",
    rating: 0,
    genres: [],
    actors: [],
    imageUrl: "",
    videoUrl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "actors") {
      setNewMovie({ ...newMovie, actors: value.split(",") });
    } else if (name === "genres") {
      setNewMovie({ ...newMovie, genres: value.split(",") });
    } else {
      setNewMovie({ ...newMovie, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addMovieAsync(newMovie) as any);
    console.log("newMovie", newMovie);
    setNewMovie({
      id: `${Date.now()}`,
      title: "",
      description: "",
      year: 0,
      country: "",
      rating: 0,
      genres: [],
      actors: [],
      imageUrl: "",
      videoUrl: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mt-3">
        <InputGroup.Text>Title</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Enter title"
          name="title"
          value={newMovie.title}
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup className="mt-3">
        <InputGroup.Text>Description</InputGroup.Text>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter description"
          name="description"
          value={newMovie.description}
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup className="mt-3">
        <InputGroup.Text>Year</InputGroup.Text>
        <Form.Control
          type="number"
          placeholder="Enter year"
          name="year"
          value={newMovie.year}
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup className="mt-3">
        <InputGroup.Text>Country</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Enter country"
          name="country"
          value={newMovie.country}
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup className="mt-3">
        <InputGroup.Text>Rating</InputGroup.Text>
        <Form.Control
          type="number"
          placeholder="Enter rating"
          name="rating"
          value={newMovie.rating}
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup className="mt-3">
        <InputGroup.Text>Image Url</InputGroup.Text>
        <Form.Control
          type="string"
          placeholder="Enter image url"
          name="imageUrl"
          value={newMovie.imageUrl}
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup className="mt-3">
        <InputGroup.Text>Video url</InputGroup.Text>
        <Form.Control
          type="string"
          placeholder="Enter video url"
          name="videoUrl"
          value={newMovie.videoUrl}
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup className="mt-3">
        <InputGroup.Text>Genres</InputGroup.Text>
        <Form.Control //should be multiselect
          type="string"
          placeholder="Enter genres"
          name="genres"
          value={newMovie.genres}
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup className="mt-3">
        <InputGroup.Text>Actors</InputGroup.Text>
        <Form.Control
          type="string"
          placeholder="Enter actors"
          name="actors"
          value={newMovie.actors}
          onChange={handleChange}
        />
      </InputGroup>

      <Button variant="primary" type="submit" className="mt-3">
        Add Movie
      </Button>
    </Form>
  );
};

export default AddMovieForm;
