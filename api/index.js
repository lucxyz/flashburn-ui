// setupProxy.js

const { createProxyMiddleware } = require("http-proxy-middleware");
// for your API key in .env
const oneinchProxy = createProxyMiddleware({
  target: "https://api.1inch.dev",
  changeOrigin: true,
  cookieDomainRewrite: 'localhost',
  //onProxyReq: relayRequestHeaders,
  //onProxyRes: relayResponseHeaders,
  pathRewrite: {
    "^/api": "",
  },
  onProxyRes: function(proxyRes, req, res) {
    if (proxyRes.headers["set-cookie"] !== undefined) {
      proxyRes.headers["set-cookie"] = proxyRes.headers[
        "set-cookie"
        ][0].replace("Secure; ", ""); // JSESSIONID cookie cannot be set thru proxy with Secure
      return proxyRes;
    }
  },
  onProxyReq: (proxyReq) => {
    // add API key in Header
    proxyReq.setHeader(
      "Authorization",
      `Bearer ${process.env.ONEINCH_KEY}`
    );
    proxyReq.setHeader(
      "accept",
      "application/json"
    );
    
      
  },
});

