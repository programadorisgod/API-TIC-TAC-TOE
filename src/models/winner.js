const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../../config/connectDB')

class Winner extends Model { }

Winner.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  sequelize,
  modelName: 'Winner'
})

module.exports = { Winner }
