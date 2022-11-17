let sequelize = require ("sequelize");
let dbConnection = require ("./../config/db.config");

let productModel = dbConnection.define("products", {

    id : {
        primaryKey : true,
        notNull : true,
        autoIncrement : true,
        type: sequelize.DataTypes.INTEGER

    },

    name : {
        notNull : true,
        type: sequelize.DataTypes.STRING
    }


});

module.exports= productModel;
    