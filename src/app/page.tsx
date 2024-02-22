import { MovieCard } from '@/components/movie-card';
import { fetchMovies } from '@/lib/utils';
import { memo } from 'react';

const IndexPage = memo(async function IndexPage() {
  const { items: movies } = await fetchMovies();

  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 md:py-10'>
      <div className='relative'>
        <div className='flex pb-4 flex-wrap gap-6'>
          {movies.map((movie, i) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default IndexPage;
