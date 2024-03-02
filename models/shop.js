const { Schema, model } = require("mongoose");

const shopSchema = new Schema({
  ShopName: {
    type: String,
    required: true,
  },
  Drugs: {
    type: Array,
    required: true,
  },
});

const Shop = model("shop", shopSchema);

module.exports = Shop;
