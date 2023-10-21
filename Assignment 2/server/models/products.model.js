import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  published: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Product', productSchema); // Use singular form
