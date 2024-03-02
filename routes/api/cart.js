const express = require("express");

const ctrl = require("../../controllers/cart.js");

const router = express.Router();

router.post("/", ctrl.addCart);

module.exports = router;
