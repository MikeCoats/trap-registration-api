import dbConfig from '../config/database.mjs';
import Sequelize from 'sequelize';

import Registration from './registration.mjs';

const sequelize = new Sequelize(dbConfig.database);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Registration = Registration(sequelize, Sequelize);

export {db as default};
