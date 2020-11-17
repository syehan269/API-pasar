//var Sequelize = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Goods = sequelize.define("goods", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    });

    return Goods;
};