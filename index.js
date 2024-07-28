const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = 3001;

app.use(morgan("tiny"));

app.get("/api/morgan-test", function (req, res) {
  res.send("hello, world!");
});

const setupAndStartServer = () => {
  app.listen(PORT, () => {
    console.log(`API-gateway started Server in ${PORT} `);
  });
};

setupAndStartServer();
