const expressAsyncHandler = require("express-async-handler");

const isUser = expressAsyncHandler(async (req, res, next) => {
  let query = req.query.form_title;

  if (query) {
    const queryCheck = query.replace(/"/g, "");
    if (queryCheck === "user") {
      next();
    } else {
      res.status(500);
      res.send({
        errorMessage: "Query is not valid" || error,
      });
    }
  } else {
    throw new Error("Query is not present");
  }
});

module.exports = { isUser };
