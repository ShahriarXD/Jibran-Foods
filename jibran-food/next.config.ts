import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "/Jibran-Foods",
  assetPrefix: "/Jibran-Foods/",
};

export default nextConfig;
