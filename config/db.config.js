const sequelize = require("sequelize");
const sequelizeInstance = new sequelize(
    "ecomm_db1",
    "root",
    "password",
    {
        host: "localhost",
        dialect:"mysql",
        operatorAliases:0,
        pool:{
            max:5,
            min:0,
            acquire:30000,
            idle:10000
        }
    }

);

module.exports = sequelizeInstance ;

