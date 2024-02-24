import { MovieList } from '@/components/list/movie-list';
import { OrderToggle } from '@/components/list/order-toggle';
import { PropertySelect } from '@/components/list/property-select';
import { SearchInput } from '@/components/list/search-input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { memo } from 'react';
import { fetchMoviesAction } from './actions';

const IndexPage = memo(async function IndexPage() {
  const { items: movies } = await fetchMoviesAction();

  return (
    <section className='container grid items-center content-start gap-6 pb-8 pt-2'>
      <div className='flex items-center gap-2 px-4'>
        <SearchInput />
        <PropertySelect />
        <OrderToggle />
      </div>
      <ScrollArea>
        <MovieList initialMovies={movies} />
      </ScrollArea>
    </section>
  );
});

export default IndexPage;
