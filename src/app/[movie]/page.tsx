import { MovieDetail } from '@/components/detail/movie-detail';
import { fetchMovieBySlug, fetchMovies } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { memo } from 'react';

const Page = memo(async function Page({
  params: { movie: slug },
}: {
  params: {
    movie: string;
  };
}) {
  const movie = await fetchMovieBySlug(slug);
  if (!movie) {
    return notFound();
  }

  return (
    <div className='flex justify-center w-[100%]'>
      <div className='flex flex-col justify-center'>
        <MovieDetail movie={movie} />
      </div>
    </div>
  );
});

export default Page;

// Generate routes for known movies at build time
const generateStaticParams = async () => {
  const movies = await fetchMovies();
  return movies.items.map(({ slug }) => ({
    slug,
  }));
};

export { generateStaticParams };
