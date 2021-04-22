var log4js = require("log4js");
var config = require("../../config/log4js.config.js");
var console;

log4js.configure(config);

console = log4js.getLogger("console");

module.exports = {
  console
};