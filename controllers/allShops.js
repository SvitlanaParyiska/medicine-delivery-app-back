const AllShops = require("../models/allShops");
const { ctrlWrapper, HttpError } = require("../helpers");

const getAllShopsList = async (req, res) => {
  const result = await AllShops.find({ list: "Shops" });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result[0].allShopsList);
};

module.exports = {
  getAllShopsList: ctrlWrapper(getAllShopsList),
};
