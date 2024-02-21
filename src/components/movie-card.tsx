import { memo } from 'react';
import { Skeleton } from './ui/skeleton';

const MovieCard = memo(function MovieCard() {
  return (
    <div className='flex flex-col space-y-3'>
      {/* Poster Image */}
      <Skeleton className='h-[292px] w-[195px] rounded-xl' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[180px]' />
        <Skeleton className='h-4 w-[130px]' />
      </div>
    </div>
  );
});

export { MovieCard };
