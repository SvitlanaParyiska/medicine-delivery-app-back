const { Schema, model } = require("mongoose");

const allShopSchema = new Schema({
  allShopsList: {
    type: Array,
    required: true,
  },
});

const AllShop = model("allshop", allShopSchema);

module.exports = AllShop;
