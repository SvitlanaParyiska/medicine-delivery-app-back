const Shop = require("../models/shop");
const { ctrlWrapper, HttpError } = require("../helpers");

const getDrugsByShop = async (req, res) => {
  const results = await Shop.find();
  if (!results) {
    throw HttpError(404, "Not found");
  }
  res.json(results);
};

module.exports = {
  getDrugsByShop: ctrlWrapper(getDrugsByShop),
};
