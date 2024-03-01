const { Cart } = require("../models/cart");
const { ctrlWrapper, HttpError } = require("../helpers");

const addCart = async (req, res) => {
  const results = await Cart.create();
  if (!results) {
    throw HttpError(404, "Not found");
  }
  res.json(results[0].allShopsList);
};

module.exports = {
  addCart: ctrlWrapper(addCart),
};
