import { Sequelize } from "sequelize";

async function connectionDB() {
  const sequelize = new Sequelize(process.env.psql);

  try {
    await sequelize.authenticate();
    console.log("Connect has been establish successfully.");
  } catch (error) {
    console.error("Unable to connect to the db: ", error);
  }
}

export default connectionDB;
