var express = require('express');
var cors = require('cors');
require("dotenv").config();
const fs = require("fs");
const multer = require("multer");
const upload = multer().single("upfile");

var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", upload, async function (req, res) {
  if (req.file) {
    // destructure the pertinent information and return a JSON object
    const { originalname: name, mimetype: type, size } = req.file;
    res.json({
      name,
      type,
      size,
    });
  }
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
