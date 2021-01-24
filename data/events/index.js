"use strict";

const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const getOrders = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("");
    const list = await pool.request().query(sqlQueries.orderList);
    return list.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getOrders,
};
