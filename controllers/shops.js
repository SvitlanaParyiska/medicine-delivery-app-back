const Shop = require("../models/shop");
const AllShop = require("../models/allShops");
const { ctrlWrapper, HttpError } = require("../helpers");

const getDrugsByShop = async (req, res) => {
  const { filter } = req.query;
  const validSearch = decodeURIComponent(filter);
  console.log(String(validSearch));
  const results = await Shop.find({ ShopName: validSearch });
  if (!results) {
    throw HttpError(404, "Not found");
  }
  res.json(results);
};

const getAllShopsList = async (req, res) => {
  const results = await AllShop.find();
  if (!results) {
    throw HttpError(404, "Not found");
  }
  res.json(results[0].allShopsList);
};

module.exports = {
  getAllShopsList: ctrlWrapper(getAllShopsList),
  getDrugsByShop: ctrlWrapper(getDrugsByShop),
};
