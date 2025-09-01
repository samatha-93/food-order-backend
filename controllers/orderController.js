import Order from "../models/Order.js";

// Place order
export const placeOrder = async (req, res) => {
  try {
    const { items, totalPrice, address, paymentMethod, coupon } = req.body;

    // Use the logged-in user ID from authMiddleware
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
};

// Get all orders of logged-in user
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
