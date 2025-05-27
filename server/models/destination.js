import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});

const Destination = mongoose.model('Destination', destinationSchema);
export default Destination;
