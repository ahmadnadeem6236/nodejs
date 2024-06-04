const expressAsyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const { sq } = require("../db");
const User = require("../db/models/userModels");

let uuidgen = uuidv4();

const userController = expressAsyncHandler(async (req, res) => {
  if (
    req.body.name &&
    req.body.email != String &&
    req.body.isGraduate === Boolean
  )
    throw new Error("Fill the form with correct datatypes");

  const userData = {
    uuid: uuidgen,
    name: req.body.name,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    isGraduate: req.body.isGraduate,
  };

  const user = User.create(userData)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user data.",
      });
    });
});

const fetchAllUserController = expressAsyncHandler(async (req, res) => {
  const fetchUsers = await User.findAll();
  try {
    if (fetchUsers) {
      res.status(200);
      res.send(fetchUsers);
    }
  } catch (error) {
    throw new Error("No users are present");
  }
});

module.exports = { userController, fetchAllUserController };
