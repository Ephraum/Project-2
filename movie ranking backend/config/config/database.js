import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres', // or 'mysql', 'sqlite', etc.
  logging: false,
});

export default sequelize;