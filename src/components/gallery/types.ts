export type MovieDTO = {
    id?: string;
    title: string;
    description: string;
    year: number;
    country: string;
    rating: number;
    genres: string[];
    actors: string[];
    imageUrl: string;
    videoUrl: string;
  }