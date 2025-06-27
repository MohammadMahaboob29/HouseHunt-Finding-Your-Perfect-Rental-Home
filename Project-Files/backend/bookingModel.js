const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  bookingId: { type: String, required: true, unique: true },
  propertyId: { type: String, required: true },
  userId: { type: String, required: true },
  ownerId: { type: String, required: true },
  userName: { type: String, required: true },
  status: { type: String, enum: ['pending', 'confirmed'], default: 'pending' }
});

module.exports = mongoose.model('Booking', bookingSchema);