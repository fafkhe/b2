/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows ALL domains
      },
      {
        protocol: 'http',
        hostname: '**', // Allows HTTP domains too
      },
    ],
}
};

export default nextConfig;
