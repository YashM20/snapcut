/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx', 'md'],
  experimental: {
    scrollRestoration: true,
    // appDocumentPreloading: true,
    // workerThreads: true,
    // optimizeServerReact: true,
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      }
    ],
  },
};

export default nextConfig;
