"use strict";

const dotenv = require("dotenv");
const assert = require("assert");

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  SQL_USER,
  SQL_PASSWORD,
  SQL_DATABASE,
  SQL_SERVER,
} = process.env;

const sqlEncrypt = process.env.ENCRYPT === "true";

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  sql: {
    // host: "192.168.1.254",
    port: 1433,
    server: "192.168.1.254",
    database: "rfpathways",
    user: "student",
    password: "St123!",
    options: {
      encrypt: sqlEncrypt,
      enableArithAbort: true,
    },
  },
};
