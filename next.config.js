/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/ca",
        destination: "https://docs.google.com/forms/d/e/1FAIpQLSevuJ7wR2xlvs6dJ3JRoRvsdPNY4idsCq-lWc6IK5VFBQbClw/viewform",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
