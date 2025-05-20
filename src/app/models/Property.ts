import mongoose from 'mongoose';

const PropertySchema = new mongoose.Schema({
  title: String,
  location: String,
  property: String,
  bedrooms: String,
  price: String,
  images: [String],
});

export const Property = mongoose.models.Property || mongoose.model('Property', PropertySchema);
