const express = require("express");
const { formController } = require("../controllers/formController");

const Router = express.Router();

Router.post("/", formController);

module.exports = Router;
