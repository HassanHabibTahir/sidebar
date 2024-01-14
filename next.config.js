/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["image.similarpng.com", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
