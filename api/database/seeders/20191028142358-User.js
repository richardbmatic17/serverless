'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkInsert('Users', [
        {
          first_name: 'Richard',
          last_name: 'Matic',
          email: 'rmatic@gmail.com',
          age: '16',
        },
        {
          first_name: 'Joy',
          last_name: 'Infectana',
          email: 'jinfectana@gmail.com',
          age: '17',
        },
      ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Users', null, {});
    */
  }
};
