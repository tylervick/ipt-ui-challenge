import { fetchMoviesAction } from '@/app/actions';
import { MovieDetail } from '@/components/detail/movie-detail';
import { fetchMovieBySlug } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { memo } from 'react';
import { Modal } from './modal';

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
    <Modal>
      <MovieDetail movie={movie} />
    </Modal>
  );
});

export default Page;

// Generate routes for known movies at build time
const generateStaticParams = async () => {
  const movies = await fetchMoviesAction();
  return movies.items.map(({ slug }) => ({
    slug,
  }));
};

export { generateStaticParams };
