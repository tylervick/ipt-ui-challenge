import { SiteHeader } from '@/components/site-header';
import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Provider as JotaiProvider } from 'jotai';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { memo } from 'react';
import './globals.css';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

const RootLayout = memo(async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <JotaiProvider>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <div className='relative flex min-h-screen flex-col'>
              <SiteHeader />
              <div className='flex-1'>{children}</div>
            </div>
          </ThemeProvider>
        </JotaiProvider>
      </body>
    </html>
  );
});

export default RootLayout;
