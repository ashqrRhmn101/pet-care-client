/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    domains: [
      "i.ibb.co.com",
      "img.icons8.com",
      "lh3.googleusercontent.com",
      "img.daisyui.com",
    ], // Add allowed image hosts
  },
};

export default nextConfig;
