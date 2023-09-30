'use strict';
const seccionesArray = ['Entradas', 'Platos principales', 'Postres', 'Ensaladas', 'Bebidas','Cafeteria','Vinos']
const seccionesDb = seccionesArray.map(seccion => {
  return {
    name: seccion,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Sections',
    seccionesDb,
      {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Sections', null, {});

  }
};
