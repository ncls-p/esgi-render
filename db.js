const { Sequelize } = require("sequelize");

const postgressUrl = process.env.POSTGRESS_URL || "";

// Database
const sequelize = new Sequelize(
  postgressUrl,

  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: "added",
      updatedAt: "updated",
    },
  }
);

sequelize.authenticate();
sequelize.sync();

module.exports = sequelize;
