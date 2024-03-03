const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const cartSchema = new Schema(
  {
    drugsList: {
      type: Array,
      required: [true, "drugs list is required"],
    },
    totalPrice: {
      type: Number,
      required: [true, "totalPrice is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

cartSchema.post("save", handleMongooseError);

const Cart = model("cart", cartSchema);

const Joi = require("joi");

const addCartSchema = Joi.object({
  drugsList: Joi.array().required().messages({
    "any.required": "drugsList is required",
  }),
  totalPrice: Joi.number().required().messages({
    "any.required": "totalPrice is required",
  }),
});

module.exports = { Cart, addCartSchema };
