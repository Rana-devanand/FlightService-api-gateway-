const express = require("express");
const router = express.Router();
const { createProxyMiddleware } = require("http-proxy-middleware");

router.use(
  "/Bookings",
  createProxyMiddleware({
    target: "http://localhost:3001",
    changeOrigin: true,
  })
);

router.use(
  "/Authentication",
  createProxyMiddleware({
    target: "http://localhost/3002",
    changeOrigin: true,
  })
);

router.use(
  "/flights",
  createProxyMiddleware({
    target: "http://localhost/3003",
    changeOrigin: true,
  })
);

router.use(
  "reminder",
  createProxyMiddleware({
    target: "http://localhost:3004",
    changeOrigin: true,
  })
);

module.exports = router;
