// setupProxy.js

const { createProxyMiddleware } = require("http-proxy-middleware");
const oneinchProxy = createProxyMiddleware({
  target: "https://api.1inch.dev",
  changeOrigin: true,
  cookieDomainRewrite: '',
  //onProxyReq: relayRequestHeaders,
  //onProxyRes: relayResponseHeaders,
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
export default function(req, res){
  return oneinchProxy(req, res);
}
