import { cn } from '@/lib/utils';
import { Movie } from '@/types';
import Image from 'next/image';
import { Suspense, memo } from 'react';
import { Skeleton } from './ui/skeleton';

export interface MovieCardProps {
  movie: Movie;
}

const MovieSkeleton = memo(function MovieSkeleton() {
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

const MovieCard = memo(function MovieCard({ movie }: MovieCardProps) {
  return (
    <Suspense fallback={<MovieSkeleton />}>
      <div className='flex flex-col space-y-3'>
        {/* Poster Image */}
        <div
          className={cn(
            'rounded-xl overflow-hidden transition-all hover:scale-105',
            'h-[292px] w-[195px]',
          )}
        >
          <Image
            src={`/${movie.image}`}
            alt={movie.title}
            height={292}
            width={195}
            className={cn('object-cover ', {})}
          />
        </div>
        <div className='space-y-1 text-sm'>
          <h3 className='font-medium leading-none'>{movie.title}</h3>
          <p className='text-xs text-muted-foreground'>{movie.slug}</p>
        </div>
      </div>
    </Suspense>
  );
});

export { MovieCard };
