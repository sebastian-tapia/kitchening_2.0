'use strict';
const categoriasArray = ['Carnes','Pescados y mariscos','Pastas','Sopas','Desayunos y meriendas','Bebidas','Guarniciones']
const categoriasDb = categoriasArray.map(categoria => {
  return {
    name: categoria,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Categories',
    categoriasDb,
      {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Categories', null, {});

  }
};
