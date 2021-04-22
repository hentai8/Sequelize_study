'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    //Article自动变成复数 Articles
    await queryInterface.createTable('Articles', {
      //自动生成的id 编号
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      //自动生成的createdAt 表示什么时候创建的
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      //自动生成的updatedAt 表示什么时候更新的
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Articles');
  }
};