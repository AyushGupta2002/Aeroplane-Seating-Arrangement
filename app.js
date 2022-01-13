
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res) {
  res.render("header", {pholder : ""});
});

app.post("/", function(req,res) {
  console.log(req.body.num);
  let numArray = [5, 1, 7, 8, 2, 3, 9, 10, 4, 6];
  res.render("final", {pholder : req.body.num, num : req.body.num, rows: req.body.num/10, numArray : numArray});
});

app.listen(3000, function() {
  console.log("Server started at port 3000.");
});
