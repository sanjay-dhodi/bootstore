import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    // instock: {
    //   type: Number,
    //   required: true,
    // },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const productModel = mongoose.Model("product", productSchema);
