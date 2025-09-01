import express from "express";
import Coupon from "../models/Coupon.js";
const router = express.Router();

router.get("/:code", async (req, res) => {
  try {
    const coupon = await Coupon.findOne({ code: req.params.code });
    if (!coupon) return res.status(404).json({ message: "Coupon not found" });
    res.json({ discount: coupon.discount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
