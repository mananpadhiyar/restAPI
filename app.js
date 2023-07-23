const express = require("express");
const mongoose = require("mongoose");
const appRoute = require("./routes/appRoute");

const app = express();

const MONGO_URI = `mongodb://127.0.0.1:27017/student_api`;

app.use(express.json());
app.use("/", appRoute);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("DB CONNECTED");
    app.listen(8000, () => {
      console.log("running on server 8000");
    });
  })
  .catch(() => {
    console.log("NO CONNECTION");
  });

// you do not need express.json() or express.urlendcoded() for get or delete request
// we only need it for post and put req.

// express.json() is a method inbuilt in express to recognize the incoming request
// object as json object.
// this is called as middleware in your application using the code: express.json()
