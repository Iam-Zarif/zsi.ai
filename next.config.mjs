/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   images: { unoptimized: true },
  images: {
    domains: ["book.rpclimo.com", "rpclimo.com"],
  },
};

export default nextConfig;
