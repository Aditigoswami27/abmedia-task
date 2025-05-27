import mongoose from 'mongoose';
// Define schema for Package collection in MongoDB
const packageSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
});

const Package = mongoose.model('Package', packageSchema);
export default Package;
