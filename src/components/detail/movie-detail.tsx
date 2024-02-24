import type { Movie } from '@/types';
import {
  format,
  formatDistanceToNowStrict,
  formatDuration,
  intervalToDuration,
  parse,
} from 'date-fns';
import { memo, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { DetailCard } from './detail-card';

interface MovieDetailProps {
  movie: Movie;
}

const MovieDetail = memo(function MovieDetail({ movie }: MovieDetailProps) {
  const date = useMemo(() => {
    const parsedDate = parse(movie.date, 'yyyy-MM-dd', new Date());
    const formattedDate = format(parsedDate, 'MM/dd/yyyy');
    const relativeDate = formatDistanceToNowStrict(parsedDate, {
      addSuffix: true,
    });
    return `${formattedDate} (${relativeDate})`;
  }, [movie.date]);

  const runtime = useMemo(
    () =>
      formatDuration(
        intervalToDuration({
          start: 0,
          end: movie.run_time * 1000,
        }),
        {
          format: ['hours', 'minutes'],
        },
      ),
    [movie.run_time],
  );

  const rating = useMemo(() => movie.rating.toLocaleUpperCase(), [movie.rating]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-4xl font-extrabold tracking-tight lg:text-5xl'>
          {movie.title}
        </CardTitle>
      </CardHeader>
      <CardContent className='flex items-center gap-4'>
        <div className='w-poster-width h-poster-height rounded-lg overflow-hidden'>
          <img src={`/${movie.image}`} alt={movie.image} />
        </div>
        <div className='flex flex-col gap-2 py-2'>
          <DetailCard label='Release Date' value={date} />
          <DetailCard label='Runtime' value={runtime} />
          <DetailCard label='Rating' value={rating} />
        </div>
      </CardContent>
    </Card>
  );
});

export { MovieDetail };
