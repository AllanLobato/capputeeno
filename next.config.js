/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.googleapis.com', 'geminus.com.br', 'storage.googleapis.com']
  }
}

module.exports = nextConfig
