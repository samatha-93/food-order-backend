import Restaurant from '../models/Restaurant.js';

export const getRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find();
  res.json(restaurants);
};

export const getRestaurant = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);
  if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });
  res.json(restaurant);
};

// Optional: admin add restaurant
export const addRestaurant = async (req, res) => {
  const { name, location, menu } = req.body;
  const restaurant = new Restaurant({ name, location, menu });
  await restaurant.save();
  res.json({ message: 'Restaurant added', restaurant });
};
