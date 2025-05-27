import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
});

const Package = mongoose.model('Package', packageSchema);
export default Package;
