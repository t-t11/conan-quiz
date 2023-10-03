/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.conan-movie.jp",
        port: "",
        pathname: "/download/**",
      },
    ],
  },
};

module.exports = nextConfig;
