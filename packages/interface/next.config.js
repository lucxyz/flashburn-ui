const withTM = require("next-transpile-modules")(["@snx-flash-tool/contracts"]);

module.exports = withTM({
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
});
