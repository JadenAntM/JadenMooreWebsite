/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If your repository is not the root domain (username.github.io),
  // you must include the repository name here:
  basePath: "/JadenMooreWebsite",
  trailingSlash: true,
};

export default nextConfig;
