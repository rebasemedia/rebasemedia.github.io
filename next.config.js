/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/pradumna',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;