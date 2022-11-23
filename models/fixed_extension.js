module.exports = (sequelize, Sequelize) => {
  const fixed_extension = sequelize.define(
    'fixed_extension',
    {
      //고정확장자 이름
      extension_name: {
        type: Sequelize.STRING(10),
      },
      //고정확장자 체크 유무
      is_checked: {
        type: Sequelize.CHAR(1),
      },
    },
    {
      //options
      freezeTableName: true,
    }
  )
  return fixed_extension
}
