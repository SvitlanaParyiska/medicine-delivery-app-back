const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const cartSchema = new Schema(
  {
    drugsList: {
      type: [
        {
          drugName: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          total: {
            type: Number,
            required: true,
          },
          imgURL: {
            type: String,
            required: true,
          },
        },
      ],
      required: [true, "drugs list is required"],
    },
    totalPrice: {
      type: Number,
      required: [true, "totalPrice is required"],
    },
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, " email is required"],
    },
    phone: {
      type: Number,
      required: [true, " phone is required"],
    },
    address: {
      type: String,
      required: [true, " email is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

cartSchema.post("save", handleMongooseError);

const Cart = model("cart", cartSchema);

const Joi = require("joi");

const addCartSchema = Joi.object({
  drugsList: Joi.array()
    .items(
      Joi.object({
        drugName: Joi.string().required().messages({
          "any.required": "missing required drugName field",
        }),
        price: Joi.number().required().messages({
          "any.required": "missing required price field",
        }),
        total: Joi.number().required().messages({
          "any.required": "missing required quantity field",
        }),
        imgURL: Joi.string().required().messages({
          "any.required": "imgURL required quantity field",
        }),
      })
    )
    .required()
    .messages({
      "any.required": "missing required orderMedicines field",
    }),
  totalPrice: Joi.number().required().messages({
    "any.required": "totalPrice is required",
  }),
  name: Joi.string().required().messages({
    "any.required": "name is required",
  }),
  email: Joi.string().required().messages({
    "any.required": "email is required",
  }),
  phone: Joi.number().required().messages({
    "any.required": "phone is required",
  }),
  address: Joi.string().required().messages({
    "any.required": "address is required",
  }),
});

module.exports = { Cart, addCartSchema };
