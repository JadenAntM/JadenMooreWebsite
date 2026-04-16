/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // This must match your repository name
  basePath: "/JadenMooreWebsite",
  assetPrefix: "/JadenMooreWebsite/",
};

export default nextConfig;
