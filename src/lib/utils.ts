import makeData from '@/lib/data';
import { Movie, MovieResponse } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { cache } from 'react';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const fetchMovies = cache(async (): Promise<MovieResponse> => {
  const data = makeData();
  return data;
});

const fetchMovie = cache(async (title: string): Promise<Movie | undefined> => {
  const data = makeData();
  return data.items.find((item) => item.title === title);
});

export { cn, fetchMovies, fetchMovie };
