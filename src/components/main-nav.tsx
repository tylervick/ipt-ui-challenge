import { siteConfig } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { memo } from 'react';

type NavItem = {
  label: string;
  href: string;
  disabled?: boolean;
};

interface MainNavProps {
  items?: NavItem[];
}

const MainNav = memo(function MainNav({ items }: MainNavProps) {
  return (
    <div className='flex gap-6 md:gap-10'>
      <Link href='/' className='flex items-center space-x-2'>
        <span className='inline-block font-bold'>{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className='flex gap-6'>
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={`${item.label}-${index}`}
                  href={item.href}
                  className={cn(
                    'flex items-center text-sm font-medium text-muted-foreground',
                    item.disabled && 'cursor-not-allowed opacity-50',
                  )}
                >
                  {item.label}
                </Link>
              ),
          )}
        </nav>
      ) : null}
    </div>
  );
});

export { MainNav };
