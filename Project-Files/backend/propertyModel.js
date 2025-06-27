const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  propertyId: { type: String, required: true, unique: true },
  prop_type: { type: String, required: true },
  prop_address: { type: String, required: true },
  prop_amt: { type: Number, required: true },
  isAvailable: { type: Boolean, default: true },
  ownerId: { type: String, required: true },
  ad_info: { type: String },
  prop_images: { type: [String] },
  owner_contact: { type: String }
});

module.exports = mongoose.model('Property', propertySchema);