const config = require('./app');

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    preMigrations: {
      username: 'licensing',
      password: config.licensingPassword,
      database: 'licensing',
      host: config.databaseHost,
      dialect: 'postgres',
      schema: 'public',
      logging: false
    },
    database: {
      username: 'traps',
      password: config.trapsPassword,
      database: 'licensing',
      host: config.databaseHost,
      dialect: 'postgres',
      schema: 'traps',
      logging: false
    }
  };
} else {
  module.exports = {
    preMigrations: {
      dialect: 'sqlite',
      storage: './.development.db'
    },
    database: {
      dialect: 'sqlite',
      storage: './.development.db'
    }
  };
}
