var DataTypes = require("sequelize").DataTypes;
var _clientes = require("./clientes");

function initModels(sequelize) {
  var clientes = _clientes(sequelize, DataTypes);


  return {
    clientes,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
