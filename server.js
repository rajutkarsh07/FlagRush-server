const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = require("./app");

const DB = process.env.DATABASE_HOST.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);


mongoose
  .connect(DB, {
    // useNewUrlParser:true,
    // useCreateIndex:true,
    // useFindAndModify:false
  })
  .then(() => console.log(`Connection sucessfully`));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
