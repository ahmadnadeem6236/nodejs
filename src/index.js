import connectionDB from "./db/index.js";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

connectionDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log("Server is running at the port: ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("Database connection failed", error);
  });
