module.exports = (sequelize, Sequelize) => {
  const custom_extension = sequelize.define(
    'custom_extension',
    {
      //커스텀확장자 이름
      extension_name: {
        type: Sequelize.STRING(20),
      },
    },
    {
      //options
      freezeTableName: true,
    }
  )
  return custom_extension
}
