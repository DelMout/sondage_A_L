const express = require("express");
const router = express.Router();

const sondCtrl = require("../controllers/sondage");

// * Get datas of sondage
router.get("/getsondage", sondCtrl.getSondage);

// * Save a line of sondage
router.post("/savesondage", sondCtrl.saveSondage);

module.exports = router;
