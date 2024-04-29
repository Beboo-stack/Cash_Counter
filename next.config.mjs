/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      " images.ctfassets.net/v1g4g6m8os9n/1vd0PvDlgISX1bGtkaCLdw/9667666b66fb285e84fdd78e44ea237a/1.jpg",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
