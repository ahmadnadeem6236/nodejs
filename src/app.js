const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

const formRoutes = require("./routes/formRoutes");

app.use("/form", formRoutes);

app.get("/", (req, res) => {
  res.send("helloooooo");
});

module.exports = app;
