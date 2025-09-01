import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  menu: Array,
  location: String,
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
