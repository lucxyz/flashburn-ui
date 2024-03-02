// setupProxy.js

const { createProxyMiddleware } = require("http-proxy-middleware");
// for your API key in .env
module.exports = function (app) {
  app.use( "/quote", createProxyMiddleware({
    target: "https://api.1inch.dev",
    changeOrigin: true,
    onProxyReq: (proxyReq) => {
      // add API key in Header
      proxyReq.setHeader(
        "Authorization",
        `Bearer ${process.env.ONEINCH_KEY}`
      );
    },
  }));
  app.use( "/swap", createProxyMiddleware({
    target: "https://api.1inch.dev",
    changeOrigin: true,
    onProxyReq: (proxyReq) => {
      // add API key in Header
      proxyReq.setHeader(
        "Authorization",
        `Bearer ${process.env.ONEINCH_KEY}`
      );
    },
  }));
};
