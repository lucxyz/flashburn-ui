const { createProxyMiddleware } = require("http-proxy-middleware");
// for your API key in .env
require("dotenv").config();

module.exports = function (app) {
  app.use(createProxyMiddleware("/swap", {
    target: "https://api.1inch.dev/swap",
    changeOrigin: true,
    onProxyReq: (proxyReq) => {
      // add API key in Header
        proxyReq.setHeader(
          "Authorization",
          `Bearer ${process.env.REACT_APP_1INCH_KEY}`
        );
      },
    })
   );
};
