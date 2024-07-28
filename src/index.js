const express = require("express");
const morgan = require("morgan");
const rateLimiter = require("express-rate-limit");
const routes = require("./routes/index");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const PORT = 3002;

const limiter = rateLimiter({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 3, // limit each IP to 3 requests per windowMs
  message: "Too many requests, please try again later.",
});

app.use(limiter);
app.use(morgan("combined"));

// api-gateway routes
app.use("/", routes);

app.get("/api/morgan-test", function (req, res) {
  res.send("hello, world!");
});

const setupAndStartServer = () => {
  app.listen(PORT, () => {
    console.log(`API-gateway started Server in ${PORT} `);
  });
};

setupAndStartServer();
