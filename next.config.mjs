/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    domains: ["book.rpclimo.com", "rpclimo.com"],
  },
};

export default nextConfig;
