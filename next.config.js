/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    APP_ID: process.env.NEXT_PUBLIC_APP_ID,
    API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
}

module.exports = nextConfig
