const Shop = require("../models/shop");

const { ctrlWrapper, HttpError } = require("../helpers");

const getDrugsByShop = async (req, res) => {
  const { filter } = req.query;
  const validSearch = decodeURIComponent(filter);
  const results = await Shop.find({ ShopName: validSearch });
  if (!results) {
    throw HttpError(404, "Not found");
  }
  res.json(results);
};

module.exports = {
  getDrugsByShop: ctrlWrapper(getDrugsByShop),
};
