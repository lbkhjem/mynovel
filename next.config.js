const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ['avatar.novelonlinefree.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
