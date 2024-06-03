const { sq } = require("../index");
const { DataTypes, Sequelize, UUIDV4 } = require("sequelize");

const Form = sq.define("form", {
  uniqueId: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phonenumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isGraduate: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Form;
