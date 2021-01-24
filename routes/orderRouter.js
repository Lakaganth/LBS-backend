"use strict";

const express = require("express");
const orderController = require("../controllers/orderController");
const router = express.Router();

const { getOrder } = orderController;

router.get("/orders", getOrder);

module.exports = {
  routes: router,
};
