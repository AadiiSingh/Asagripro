const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')

const { port } = require("./config");


app.use("/", express.static(path.join(__dirname, 'docs')));
	app.get('/*', (req, res) => {
		res.sendFile(path.join(__dirname, 'docs', 'index.html'))
  })

  app.listen(port, () => {
    console.log(`Server is connected at port....${port}`);
  });