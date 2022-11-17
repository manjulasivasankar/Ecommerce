let sequelize = require ("sequelize");
let dbConnection = require ("./../config/db.config");

let categoryModel = dbConnection.define("categories", {

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

module.exports= categoryModel;
    