/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable turbopack to avoid font loading issues
  experimental: {
    turbo: {
      enabled: false
    }
  },
  // Allow loading images from external domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fonts.gstatic.com',
      },
    ],
  },
};

module.exports = nextConfig; 