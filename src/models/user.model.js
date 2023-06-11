const {DataTypes} = require("sequelize")
const {db}= require("./../database/config")

const Product = db.define('products', {
    id:{
primaryKey: true,
autoIncrement: true,
allowNull: false,
type: DataTypes.INTEGER
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    date:{
        type:DataTypes.DATE,
        allowNull: false,
    },
    TypeRequired: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    quantity:{
        type: DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    isNew:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue: true
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    status:{
        type:DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
})

module.exports = Product;