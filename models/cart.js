const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const cartSchema = new Schema(
  {
    drugsList: {
      type: Array,
      required: [true, "drugs list is required"],
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
});

module.exports = { Cart, addCartSchema };
