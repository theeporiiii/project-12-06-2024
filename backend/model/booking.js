const mongoose = require('mongoose');

// Define the Booking Schema
const bookingSchema = mongoose.Schema({
  username: {
    type: String,
    required: true, // Ensure that the username is provided
  },
  computerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Computers', // Reference to the Computer model
    required: true,  // Ensure computerId is provided
  },
  timeSlot: {
    type: String,
    required: true, // Ensure timeSlot is provided
  },
  bookingDate: {
    type: Date,
    default: Date.now, // Store the booking date by default
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Cancelled'], // You can extend this with other statuses
    default: 'Pending', // Default status for new bookings
  },
});

// Create the model from the schema
const BookingModel = mongoose.model('Booking', bookingSchema);

// Export the model
module.exports = BookingModel;
