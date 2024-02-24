'use server';

import { fetchMovies } from '@/lib/utils';
import Fuse from 'fuse.js';

const searchAction = async (formData: FormData) => {
  if (!formData.has('query')) {
    return {
      errors: {
        query: 'Query is required',
      },
    };
  }

  const query = formData.get('query') as string;

  const movies = await fetchMovies();

  // If the query is empty, return all movies (https://github.com/krisk/Fuse/issues/229)
  if (query === '') {
    return { items: movies.items };
  }

  const fuse = new Fuse(movies.items, {
    includeScore: true,
    threshold: 0.1,
    keys: ['title', 'slug'],
  });

  const results = fuse.search(query);

  return { items: results.map((result) => result.item) };
};

const fetchMoviesAction = async () => {
  return await fetchMovies();
};

export { searchAction, fetchMoviesAction };
