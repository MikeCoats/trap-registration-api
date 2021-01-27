'use strict';

// The pre-migrations only make sense when running inside the production docker
// environment. They are not required for the development SQLite DB.
if (process.env.NODE_ENV === 'production') {
  // Even though this is a 'pre-migrations' migration, we need to import the
  // production config as we're setting the password the production account will
  // use.
  const config = require('../../../src/config/database').production;

  module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.sequelize.query('create role traps with noinherit login password :trapsPassword;', {
        type: Sequelize.QueryTypes.RAW,
        replacements: {
          trapsPassword: config.trapsPassword
        }
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.sequelize.query('drop role traps;', {
        type: Sequelize.QueryTypes.RAW
      });
    }
  };
} else {
  module.exports = {
    up: async () => {
      await Promise.resolve();
    },
    down: async () => {
      await Promise.resolve();
    }
  };
}
