const express = require("express");

const ctrl = require("../../controllers/cart.js");
const { addCartSchema } = require("../../models/cart");
const { validateBody } = require("../../middlewares");

const router = express.Router();

router.post("/", validateBody(addCartSchema), ctrl.addCart);

module.exports = router;
