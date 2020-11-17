const dbConfig = require("../config/database");
const Sequelize = require("sequelize");

//database connection config
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//include model
db.goods = require("./Goods")(sequelize, Sequelize);

module.exports = db;