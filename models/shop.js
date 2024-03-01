const { Schema, model } = require("mongoose");

const shopSchema = new Schema({
  shopName: {
    type: String,
    required: true,
  },
  drugs: {
    type: Array,
    required: true,
  },
});

const Shop = model("shop", shopSchema);

module.exports = Shop;
