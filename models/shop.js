const { Schema, model } = require("mongoose");

const shopSchema = new Schema({
  shopName: {
    type: String,
    required: true,
  },
  drugs: [{ drugName: String, price: String, imgURL: String }],
});

const Shop = model("shop", shopSchema);

module.exports = Shop;
