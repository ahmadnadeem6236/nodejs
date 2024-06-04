const express = require("express");
const userController = require("../controllers/userController");
const { isUser } = require("../middlewares/userFormMiddleware");

const Router = express.Router();

Router.post("/", isUser, userController);

module.exports = Router;
