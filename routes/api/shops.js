const express = require("express");

const ctrl = require("../../controllers/shops.js");

const router = express.Router();

router.get("/", ctrl.getAllShopsList);
router.get("/list", ctrl.getDrugsByShop);

module.exports = router;
