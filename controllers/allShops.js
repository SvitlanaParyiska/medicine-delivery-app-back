const AllShop = require("../models/allShops");
const { ctrlWrapper, HttpError } = require("../helpers");

const getAllShopsList = async (req, res) => {
  const results = await AllShop.find();
  if (!results) {
    throw HttpError(404, "Not found");
  }
  res.json(results[0].allShopsList);
};

module.exports = {
  getAllShopsList: ctrlWrapper(getAllShopsList),
};
