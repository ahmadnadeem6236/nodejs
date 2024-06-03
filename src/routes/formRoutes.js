const express = require("express");
const formController = require("../controllers/formController");

const Router = express.Router();

Router.post("/register", formController);

module.exports = Router;
