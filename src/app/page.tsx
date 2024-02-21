import { MovieCard } from '@/components/movie-card';
import { memo } from 'react';

const IndexPage = memo(function IndexPage() {
  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 md:py-10'>
      <div className='relative'>
        <div className='flex pb-4 flex-wrap gap-6'>
          {Array.from({ length: 20 }).map((_, i) => (
            <MovieCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default IndexPage;
