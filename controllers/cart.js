const { Cart } = require("../models/cart");
const { ctrlWrapper } = require("../helpers");

const addCart = async (req, res) => {
  const result = await Cart.create({ ...req.body });
  res.status(201).json(result);
};

module.exports = {
  addCart: ctrlWrapper(addCart),
};
