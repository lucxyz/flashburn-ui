const withTM = require("next-transpile-modules")(["@snx-flash-tool/contracts"]);

module.exports = withTM({
  assetPrefix: isProd ? '/your-github-repo-name/' : '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
});
