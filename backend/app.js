// require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const helmet = require("helmet"); // Protect HTTP headers

app.use(cors()); // Security CORS
app.use(bodyParser.json());
app.use(helmet());

module.exports = app;
