const express = require("express");

const ctrl = require("../../controllers/addCart.js");

const router = express.Router();

router.post("/", ctrl.addCart);

module.exports = router;
