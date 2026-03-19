import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "/Jibran-Foods",
  assetPrefix: "/Jibran-Foods/",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/Jibran-Foods",
  },
};

export default nextConfig;
