const Sequelize = require('sequelize');

const sequelize = new Sequelize('NODE', 'root', 'alafianewton', {
    dialect: 'mysql', 
    host:    'localhost'
});

module.exports = sequelize;

