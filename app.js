const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const shopsRouter = require("./routes/api/shops");
const shopsListRouter = require("./routes/api/allShops");
const cartRouter = require("./routes/api/cart");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/shops", shopsRouter);
app.use("/shopsList", shopsListRouter);
app.use("/cart", cartRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
