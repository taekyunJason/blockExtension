const config = require('../config/database')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
  timezone: config.timezone,
  operatorsAliases: 0,
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.extension = require('./custom_extension')(sequelize, Sequelize)

module.exports = db
