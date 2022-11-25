module.exports = (sequelize, Sequelize) => {
  const fixed_extension = sequelize.define(
    'fixed_extension',
    {
      //고정확장자(bat) 상태값
      bat: {
        type: Sequelize.CHAR(1),
        defaultValue: 'N',
      },
      //고정확장자(cmd) 상태값
      cmd: {
        type: Sequelize.CHAR(1),
        defaultValue: 'N',
      },
      //고정확장자(com) 상태값
      com: {
        type: Sequelize.CHAR(1),
        defaultValue: 'N',
      },
      //고정확장자(cpl) 상태값
      cpl: {
        type: Sequelize.CHAR(1),
        defaultValue: 'N',
      },
      //고정확장자(exe) 상태값
      exe: {
        type: Sequelize.CHAR(1),
        defaultValue: 'N',
      },
      //고정확장자(scr) 상태값
      scr: {
        type: Sequelize.CHAR(1),
        defaultValue: 'N',
      },
      //고정확장자(js) 상태값
      js: {
        type: Sequelize.CHAR(1),
        defaultValue: 'N',
      },
    },
    {
      //options
      freezeTableName: true,
    }
  )
  return fixed_extension
}
