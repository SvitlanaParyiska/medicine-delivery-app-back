const express = require("express");

const ctrl = require("../../controllers/shops.js");

const router = express.Router();

router.get("/", ctrl.getDrugsByShop);

module.exports = router;
