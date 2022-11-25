'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class fixed_extension extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fixed_extension.init(
    {
      index: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      bat: { type: DataTypes.STRING, defaultValue: 'N' },
      cmd: { type: DataTypes.STRING, defaultValue: 'N' },
      com: { type: DataTypes.STRING, defaultValue: 'N' },
      cpl: { type: DataTypes.STRING, defaultValue: 'N' },
      exe: { type: DataTypes.STRING, defaultValue: 'N' },
      scr: { type: DataTypes.STRING, defaultValue: 'N' },
      js: { type: DataTypes.STRING, defaultValue: 'N' },
    },
    {
      sequelize,
      modelName: 'fixed_extension',
    }
  )
  return fixed_extension
}
