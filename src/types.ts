export type Movie = {
  image: string;
  title: string;
  slug: string;
  date: string;
  rating: string;
  run_time: number;
};

export type MovieResponse = {
  items: Movie[];
};
