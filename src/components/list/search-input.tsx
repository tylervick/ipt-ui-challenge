'use client';

import { searchAction } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { moviesAtom } from '@/lib/atoms';
import { useSetAtom } from 'jotai';
import { Search } from 'lucide-react';
import { memo } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const SearchInput = memo(function SearchInput() {
  const setMovies = useSetAtom(moviesAtom);

  const debounced = useDebouncedCallback(async (data: FormData) => {
    const { items } = await searchAction(data);
    if (items) {
      setMovies(items);
    }
  }, 500);

  return (
    <div className='backdrop-blur grow'>
      <form action={debounced}>
        <div className='relative'>
          <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
          <Input
            placeholder='Search...'
            className='pl-8'
            name='query'
            onKeyUp={(e) => {
              e.preventDefault();
              e.currentTarget.form?.requestSubmit();
            }}
          />
        </div>
      </form>
    </div>
  );
});

export { SearchInput };
