// setupProxy.js

const { createProxyMiddleware } = require("http-proxy-middleware");
// for your API key in .env
const oneinchProxy = createProxyMiddleware({
  target: "https://api.1inch.dev",
  changeOrigin: true,
  cookieDomainRewrite: 'localhost',
  onProxyReq: relayRequestHeaders,
  onProxyRes: relayResponseHeaders,
  pathRewrite: {
    "^/api": "",
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
function relayRequestHeaders(proxyReq, req) {
  Object.keys(req.headers).forEach(function (key) {
    proxyReq.setHeader(key, req.headers[key]);
  });
}

function relayResponseHeaders(proxyRes, req, res) {
  Object.keys(proxyRes.headers).forEach(function (key) {
    res.setHeader(key, proxyRes.headers[key]);
  });
}
export default function(req, res){
  return oneinchProxy(req, res);
}
