'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class custom_extension extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  custom_extension.init(
    {
      index: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      extensionName: DataTypes.STRING,
      createdAt: { type: DataTypes.DATE, allowNull: false },
      updatedAt: { type: DataTypes.DATE, allowNull: false },
    },
    {
      sequelize,
      modelName: 'custom_extension',
    }
  )
  return custom_extension
}
