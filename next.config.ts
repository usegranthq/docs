import { createMDX } from "fumadocs-mdx/next";
import { NextConfig } from "next";

const withMDX = createMDX();

const config: NextConfig = {
  reactStrictMode: true,
  basePath: "/docs",
  assetPrefix: "/docs-static",
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs",
        basePath: false,
        permanent: false,
      },
      {
        source: "/docs",
        destination: "/docs/core",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default withMDX(config);
