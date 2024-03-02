const { Schema, model } = require("mongoose");

const allShopSchema = new Schema({
  allShopsList: {
    type: [String],
    required: true,
  },
});

const AllShops = model("allshop", allShopSchema);

module.exports = AllShops;
