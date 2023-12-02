import express from 'express';
const router = express.Router();

import Hotel from '../models/hotelDetails.js';
import { checkAvailability, bookRoom, cancelBooking, autoFreeRoom } from '../services/service.js';

// Define a route for retrieving all hotel details
router.get('/hotels', async (req, res) => {
    try {
        const hotels = await Hotel.find().sort({ id: -1 });
        res.json(hotels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Define a route for checking room availability
router.post('/checkAvailability', async (req, res) => {
    try {
        const { hotelId, roomType, checkInDate, checkOutDate } = req.body;
        const isAvailable = await checkAvailability(hotelId, roomType, checkInDate, checkOutDate);
        res.json({ isAvailable });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Define a route for booking a room
router.post('/bookRoom', async (req, res) => {
    try {
        const { customerDetails, hotelId, roomType, roomNumber, checkInDate, checkOutDate, paymentDetails } = req.body;
        const bookingResult = await bookRoom(customerDetails, hotelId, roomType, roomNumber, checkInDate, checkOutDate, paymentDetails);
        res.json({ success: bookingResult });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Define a route for canceling a booking
router.post('/cancelBooking', async (req, res) => {
    try {
        const { bookingId } = req.body;
        const cancellationResult = await cancelBooking(bookingId);
        res.json({ success: cancellationResult });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Define a route for automatically freeing rooms
router.post('/autoFreeRoom', async (req, res) => {
    try {
        const autoFreeResult = await autoFreeRoom();
        res.json({ success: autoFreeResult });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
