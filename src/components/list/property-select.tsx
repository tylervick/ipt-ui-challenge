'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { sortPropertyAtom } from '@/lib/atoms';
import type { Movie as IMovie } from '@/types';
import { useAtom } from 'jotai';
import { memo } from 'react';

const Movie: IMovie = {
  date: '',
  rating: '',
  run_time: 0,
  slug: '',
  title: '',
  image: '',
};

const isKeyOfMovie = (key: string): key is keyof IMovie => {
  return key in Movie;
};

const PropertySelect = memo(function PropertySelect() {
  const [selectedProperty, setSelectedProperty] = useAtom(sortPropertyAtom);

  return (
    <Select
      value={selectedProperty}
      onValueChange={(val) => {
        if (isKeyOfMovie(val)) {
          setSelectedProperty(val);
        }
      }}
    >
      <SelectTrigger className='w-[180px] backdrop-blur'>
        <SelectValue placeholder='Sort by...' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort By</SelectLabel>
          {Object.keys(Movie).map((key) => (
            <SelectItem key={key} value={key}>
              <div className='flex items-center'>{key}</div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
});

export { PropertySelect };
