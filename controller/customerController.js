const sequelize = require('../config/database');
const initModels = require('../models/init-models');

console.log(sequelize);

const models = initModels(sequelize);
const Clientes = models.clientes;

