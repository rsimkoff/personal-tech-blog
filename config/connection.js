const Sequelize = require('sequelize');

let sequelize;

if (process.env.JAWSDB_URL){
    console.log("running JAWS" + process.env.JAWSDB_URL);
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    console.log("running local" + process.env.DB_URI);
    sequelize = new Sequelize(process.env.DB_URI);
}

module.exports = sequelize;