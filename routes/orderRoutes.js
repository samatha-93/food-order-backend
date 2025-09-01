import express from "express";
import Order from "../models/Order.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Place order
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { items, totalPrice, address, paymentMethod, coupon } = req.body;
    const order = new Order({
      user: req.user.id,
      items,
      totalPrice,
      address,
      paymentMethod,
      coupon,
    });
    await order.save();
    res.json({ message: "Order placed", orderId: order._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get orders of logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// (Optional) Update order status - for admin
router.put("/:id/status", authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    if (!["Placed", "Preparing", "Out for Delivery", "Delivered"].includes(status))
      return res.status(400).json({ message: "Invalid status" });

    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    order.status = status;
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
