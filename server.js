const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); //to read json data

const mongoose = require("mongoose");
const User = require("./models/userSchema");

app.get("/", (req, res) => {
  // send simple code
  // res.send('<h1>Hello World!</h1>')
  // send file html
  res.sendFile("./views/home.html", { root: __dirname });
});

mongoose
  .connect(
    "mongodb+srv://halhoulsa00:DBC5gt05EDeSYDWG@cluster0.royeevr.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.post("/", (req, res) => {
  // console.log(req.body);//{ name: 'salmA' }
  const user = new User(req.body);
  user
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});
