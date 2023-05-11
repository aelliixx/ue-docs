const {withContentlayer} = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    output: 'export',
    reactStrictMode: true,
    swcMinify: true,
    images: {unoptimized: true}
}

module.exports = withContentlayer(nextConfig);
