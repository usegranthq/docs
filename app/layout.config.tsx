import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "useGrant",
    url: "https://usegrant.dev",
  },
  githubUrl: "https://github.com/usegranthq/app",
  links: [
    {
      text: "Home",
      url: "https://usegrant.dev",
      external: true,
    },
  ],
};
