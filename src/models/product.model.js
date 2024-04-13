//mongoose
const mongoose = require("mongoose");
// Define your schema
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLenght: 100,
    },
    description: {
      type: String,
      required: true,
    },
    imageKey: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Define your model
const Product = mongoose.model("Product", productSchema);

// export your model
module.exports = Product;
