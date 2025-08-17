import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  basePath: '/docs',
  assetPrefix: '/docs-static',
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs',
        basePath: false,
        permanent: false,
      },
      {
        source: '/docs',
        destination: '/docs/core',
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default withMDX(config);
