const { sq } = require("../index");
const { DataTypes, UUIDV4 } = require("sequelize");

const User = sq.define("user", {
  uniqueId: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
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
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  isGraduate: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = User;
