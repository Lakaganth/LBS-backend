"use strict";

const orderData = require("../data/events");

const getOrder = async (req, res, next) => {
  try {
    const orders = await orderData.getOrders();
    res.send(orders);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getOrder,
};
