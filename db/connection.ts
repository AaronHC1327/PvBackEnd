import { Sequelize } from 'sequelize';

const db = new Sequelize('jaap', 'root', '', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql',
    // logging: false
});

export default db;