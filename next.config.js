const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () =>
    [
      {
        source: "/:path*",
        destination: "/very/deeply/nested/:path*",
        locale: false,
      },
    ] || [],
};

module.exports = nextConfig;
