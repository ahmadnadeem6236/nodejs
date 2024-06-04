const express = require("express");
const {
  userController,
  fetchAllUserController,
} = require("../controllers/userController");
const { isUser } = require("../middlewares/userFormMiddleware");
const { fetchAllFormController } = require("../controllers/formController");

const Router = express.Router();

Router.post("/", isUser, userController);
Router.get("/", isUser, fetchAllUserController);

module.exports = Router;
