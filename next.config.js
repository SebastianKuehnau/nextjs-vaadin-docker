/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer, dev }) => {
    if (dev) {
      config.optimization.minimize = false;
      delete config.optimization.minimizer;
    }

    if (!isServer) {
      // Do not transpile to ES5
      config.target = ["web", "es2020"];
    }

    return config;
  },
};

nextConfig.experimental = {
  legacyBrowsers: false,
  browsersListForSwc: false,
};

module.exports = nextConfig;
