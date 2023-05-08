const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withContentlayer(nextConfig);
