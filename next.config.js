/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-US", "tr-TR"],
    defaultLocale: "en-US",
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
