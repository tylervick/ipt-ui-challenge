'use client';

import { Toggle } from '@/components/ui/toggle';
import { sortOrderAscendingAtom } from '@/lib/atoms';
import { useAtom } from 'jotai';
import { ArrowDownZA, ArrowUp, ArrowUpAZ } from 'lucide-react';
import { memo } from 'react';

const OrderToggle = memo(function OrderToggle() {
  const [sortOrderAscending, setSortOrderAscending] = useAtom(sortOrderAscendingAtom);

  return (
    <Toggle
      variant='outline'
      aria-label='toggle sort order'
      pressed={!sortOrderAscending}
      onClick={() => {
        setSortOrderAscending(!sortOrderAscending);
      }}
    >
      {sortOrderAscending ? <ArrowUpAZ /> : <ArrowDownZA />}
    </Toggle>
  );
});

export { OrderToggle };
