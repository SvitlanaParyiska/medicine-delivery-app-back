const express = require("express");

const ctrl = require("../../controllers/allShops");

const router = express.Router();

router.get("/", ctrl.getAllShopsList);

module.exports = router;
