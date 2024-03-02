const { Schema, model } = require("mongoose");

const shopSchema = new Schema({
  ShopName: {
    type: String,
    required: true,
  },
  Drugs: [{ DrugName: String, Price: String, imgURL: String }],
});

const Shop = model("shop", shopSchema);

module.exports = Shop;
