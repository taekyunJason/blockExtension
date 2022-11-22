module.exports = (sequelize, Sequelize) => {
  const extension = sequelize.define(
    'extension',
    {
      //확장자 이름
      extension_name: {
        type: Sequelize.STRING(20),
      },
    },
    {
      //options
      freezeTableName: true,
    }
  )
  return extension
}
