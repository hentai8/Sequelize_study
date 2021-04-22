'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Articles', [
      {
        title: 'Sequelize',
        content:"Sequelize操作mysql真不戳",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title: 'wechaty',
        content:"wechaty做自动微信机器人真不辍",
        createdAt:new Date(),
        updatedAt:new Date()
      }
      ], {});
    },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Articles', null, {});
  }
};
