require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const helmet = require("helmet"); // Protect HTTP headers
const sharp = require("sharp"); // Reduction image

const sondRoutes = require("./routes/sondage");

// Models
const { sondage } = require("./models");

app.use(cors()); // Security CORS
app.use(bodyParser.json());
app.use(helmet());

// **** ROUTES ****

// * Sondage
app.use("/api/sondage", sondRoutes);

// * Access images
app.use("/images/", express.static(path.join(__dirname, "images")));

module.exports = app;
