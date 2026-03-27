/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // 👈 ADD THIS LINE
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig