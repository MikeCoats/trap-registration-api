'use strict';

// The pre-migrations only make sense when running inside the production docker
// environment. They are not required for the development SQLite DB.
if (process.env.NODE_ENV === 'production') {
  module.exports = {
    up: async (queryInterface) => {
      await queryInterface.createSchema('traps');
    },
    down: async (queryInterface) => {
      await queryInterface.dropSchema('traps');
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
