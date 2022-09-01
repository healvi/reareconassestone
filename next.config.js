/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['flowbite.com', 'static01.nyt.com'],
  },
}

module.exports = nextConfig
