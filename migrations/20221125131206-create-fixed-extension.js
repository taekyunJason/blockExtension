'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fixed_extensions', {
      index: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bat: {
        type: Sequelize.STRING,
        defaultValue: 'N',
      },
      cmd: {
        type: Sequelize.STRING,
        defaultValue: 'N',
      },
      com: {
        type: Sequelize.STRING,
        defaultValue: 'N',
      },
      cpl: {
        type: Sequelize.STRING,
        defaultValue: 'N',
      },
      exe: {
        type: Sequelize.STRING,
        defaultValue: 'N',
      },
      scr: {
        type: Sequelize.STRING,
        defaultValue: 'N',
      },
      js: {
        type: Sequelize.STRING,
        defaultValue: 'N',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('fixed_extensions')
  },
}
