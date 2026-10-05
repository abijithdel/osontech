/** @type {import('next').NextConfig} */
const nextConfig = {
  // Adds security headers that also benefit Core Web Vitals & SEO
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Image optimisation settings
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400, // 24 hours
  },

  // Strip "X-Powered-By: Next.js" header to reduce fingerprinting
  poweredByHeader: false,

  // Enforce trailing slash consistency for canonical URLs
  trailingSlash: false,
};

export default nextConfig;
