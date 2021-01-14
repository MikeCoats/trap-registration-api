import config from './app.mjs';

let dbConfig;

if (process.env.NODE_ENV === 'production') {
  dbConfig = {
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
  dbConfig = {
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

export {dbConfig as default};
