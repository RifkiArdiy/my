import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: '/my',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
