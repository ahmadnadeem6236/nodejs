const expressAsyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const { sq } = require("../db");
const Form = require("../db/models/formModel");

let uuidgen = uuidv4();

const formController = expressAsyncHandler(async (req, res) => {
  if (
    req.body.title &&
    req.body.name &&
    req.body.email != String &&
    req.body.isGraduate === Boolean
  )
    throw new Error("Fill the form with correct datatypes");

  const formData = {
    uuid: uuidgen,
    title: req.body.title,
    name: req.body.name,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    isGraduate: req.body.isGraduate,
  };

  const form = Form.create(formData)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the form data.",
      });
    });
});

module.exports = { formController };
