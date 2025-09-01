import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        _id: String,
        name: String,
        price: Number,
        qty: Number,
      },
    ],
    totalPrice: { type: Number, required: true },
    address: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    coupon: { type: String, default: "" },
    status: {
      type: String,
      enum: ["Placed", "Preparing", "Out for Delivery", "Delivered"],
      default: "Placed",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
