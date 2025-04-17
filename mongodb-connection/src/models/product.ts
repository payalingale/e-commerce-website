import { model, Schema, models } from "mongoose";

const prouductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export const Product = models.Product || model("Product", prouductSchema);
