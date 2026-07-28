import { RootProvider } from "fumadocs-ui/provider/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { ReactNode } from "react";

import "./global.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen mx-auto relative">
        <RootProvider
          search={{
            options: {
              api: "/docs/api/search",
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
