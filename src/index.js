const app = require("./app");
const { sq, connectDB } = require("./db/index");
const Form = require("./db/models/formModel");
const User = require("./db/models/userModels");

require("dotenv").config();

connectDB()
  .then(() => {
    app.listen(
      process.env.PORT || 4000,
      console.log(`App is listening at the port : ${process.env.PORT}`)
    );
  })
  .catch((error) => {
    console.log("Error : ", error);
  });
Form.sync().then(() => {
  console.log("form Model synced");
});
User.sync().then(() => {
  console.log("User Model synced");
});
