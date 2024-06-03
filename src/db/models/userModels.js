const { sq } = require("../index");
const { DataTypes } = require("sequelize");

const User = sq.define("user", {
  uniqueId: {
    type: DataTypes.UUID,
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

module.exports = User;
