const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const {commonQuery} = require('./db');
const router = require('./routes/index');

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
  })); 

app.use(cors());


app.use('/ap1/v1',router);

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});


