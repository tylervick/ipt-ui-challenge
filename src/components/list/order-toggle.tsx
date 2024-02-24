'use client';

import { Toggle } from '@/components/ui/toggle';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { sortOrderAscendingAtom } from '@/lib/atoms';
import { useAtom } from 'jotai';
import { ArrowDownZA, ArrowUp, ArrowUpAZ } from 'lucide-react';
import { memo } from 'react';

const OrderToggle = memo(function OrderToggle() {
  const [sortOrderAscending, setSortOrderAscending] = useAtom(sortOrderAscendingAtom);

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
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
        </TooltipTrigger>
        <TooltipContent>Order</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

export { OrderToggle };
