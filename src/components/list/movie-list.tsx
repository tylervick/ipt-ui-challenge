'use client';

import { moviesAtom, sortOrderAscendingAtom, sortPropertyAtom } from '@/lib/atoms';
import type { Movie } from '@/types';
import { useAtom, useAtomValue } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import { memo, useMemo } from 'react';
import { MovieListItem } from './movie-list-item';

interface MovieListProps {
  initialMovies: Movie[];
}

const MovieListWrapper = memo(function MovieListWrapper({ initialMovies }: MovieListProps) {
  useHydrateAtoms([[moviesAtom, initialMovies]]);
  return <MovieList />;
});

const MovieList = memo(function MovieList() {
  const sortProperty = useAtomValue(sortPropertyAtom);
  const sortOrderAscending = useAtomValue(sortOrderAscendingAtom);
  const [movies, setMovies] = useAtom(moviesAtom);

  // biome-ignore lint/correctness/useExhaustiveDependencies: sortProperty is a key of Movie
  const sortedMovies = useMemo(() => {
    return movies.sort((a, b) => {
      if (a[sortProperty] < b[sortProperty]) {
        return sortOrderAscending ? -1 : 1;
      }
      if (a[sortProperty] > b[sortProperty]) {
        return sortOrderAscending ? 1 : -1;
      }
      return 0;
    });
  }, [sortProperty, sortOrderAscending, movies]);

  return (
    <div className='flex flex-wrap gap-4'>
      {sortedMovies.map((movie, i) => (
        <MovieListItem key={movie.title} movie={movie} width={195} height={292} />
      ))}
    </div>
  );
});

export { MovieListWrapper as MovieList };
