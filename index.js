"use strict";

const express = require("express");
const config = require("./config");
const cors = require("cors");
const bodyParser = require("body-parser");
const orderRoutes = require("./routes/orderRouter");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", orderRoutes.routes);

app.listen(config.port, () =>
  console.log(`Server is running on ${config.port}`)
);
