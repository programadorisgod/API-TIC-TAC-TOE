const dotenv = require('dotenv')
dotenv.config()

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('classmasterbeta', 'camilo', 'kendrys2813', {
  host: process.env.DBHOST,
  dialect: 'mysql',
  port: process.env.DBPORT
})

async function testConnection () {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
testConnection()

module.exports = { sequelize }
