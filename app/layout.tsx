import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import './global.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.className} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
