const sequelize = require('../../config/database');
const initModels = require('../models/init-models');

// console.log(initModels);

const models = initModels(sequelize);
const Clientes = models.clientes;

// console.log(Clientes);

const  getAllusers = async (req, res) => {
    try{
        const users = await Clientes.findAll();
        console.log(users);
    } catch(error){
        console.log(error, 'erro');
        
    }
}

const result = getAllusers()
// console.log(result, 'resultado');

