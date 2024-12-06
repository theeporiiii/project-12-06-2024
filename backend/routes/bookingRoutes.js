const express = require('express');
const router = express.Router();
const BookingModel = require('../model/booking'); // Import the BookingModel
const ComputerModel = require('../model/computer'); // Import the ComputerModel

// Route to create a new booking
router.post('/book', async (req, res) => {
  const { username, computerId, timeSlot } = req.body;

  // Check if the required fields are provided
  if (!username || !computerId || !timeSlot) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Check if the computerId is valid
    const computer = await ComputerModel.findById(computerId);
    if (!computer) {
      return res.status(404).json({ message: 'Computer not found' });
    }

    // Check if the selected timeSlot is available for the computer
    if (!computer.timeSlots.includes(timeSlot)) {
      return res.status(400).json({ message: 'Time slot not available for this computer' });
    }

    // Create a new booking entry
    const newBooking = new BookingModel({
      username,
      computerId,
      timeSlot,
    });

    // Save the new booking to the database
    await newBooking.save();

    res.status(201).json({ message: 'Booking created successfully!', booking: newBooking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Failed to create booking' });
  }
});

// Route to get all bookings
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await BookingModel.find().populate('computerId', 'computerId');  // Populating computerId to get computer details
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
});

module.exports = router;
