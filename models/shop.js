const { Schema, model } = require("mongoose");

const shopSchema = new Schema({
  ShopName: {
    type: String,
    required: true,
  },
  Drugs: [{ type: String, default: "" }],
});

const Shop = model("shop", shopSchema);

module.exports = Shop;
