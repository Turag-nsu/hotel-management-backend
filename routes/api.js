import express from 'express';
const router = express.Router();

import Hotel from '../models/hotelDetails.js';
import UserDetails from '../models/userDetails.js';
import bookingDetails from '../models/bookingDetails.js';
import { bookRoom, cancelBooking, successLogin } from '../services/service.js';

// Define a route for retrieving all hotel details
router.get('/hotels', async (req, res) => {
    try {
        const hotels = await Hotel.find().sort({ id: -1 });
        res.json(hotels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//define a route for retrieving a single hotel details
router.get('/hotels/:id', async (req, res) => {
    try {
        const hotel = await Hotel.findOne({ id: req.params.id });
        res.json(hotel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// Define a route for booking a room
router.post('/bookRoom', async (req, res) => {
    // console.log("bookRoom", req.body, "bookRoom end");
    try {
        const { customerDetails, hotelId, roomType, checkInDate, checkOutDate, paymentDetails } = req.body;
        const bookingResult = await bookRoom(customerDetails, hotelId, roomType, checkInDate, checkOutDate, paymentDetails);
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
//get booking by phone
router.get('/booking/:phone', async (req, res) => {
    try {
        const booking = await bookingDetails.findOne({ "customerDetails.phone": req.params.phone });
        res.json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//cancel booking by phone
router.delete('/booking/:phone', async (req, res) => {
    try {
        const booking = await bookingDetails.find({ "customerDetails.phone": req.params.phone });
        //delete all booking by phone
        booking.forEach(async (booking) => {
            await bookingDetails.deleteOne({ _id: booking._id });
        });
        res.json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//define a route for creating a new user
router.post('/users', async (req, res) => {
    const count = await UserDetails.countDocuments();
    const lastUserId = count === 0 ? 0 : (await UserDetails.findOne().sort({ id: -1 })).id;
    const newUser = new UserDetails({
        ...req.body,
        id: lastUserId + 1,
    });
    try {
        await newUser.save();
        res.status(201);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

});

// Define a route for retrieving user details by email
router.post('/users/login', async (req, res) => {
    const { email, password } = req.body;
    // console.log("login user router: ", email, password);
    if (successLogin(email, password)) {
        try {
            const user = await UserDetails.findOne({ email: email });
            // console.log("user", user);
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(500).json({ message: "User not found" });
    }
});

//test part
router.get('/testAllUser', async (req, res) => {
    try {
        const user = await UserDetails.find();
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);

//test all booking
router.get('/testAllBooking', async (req, res) => {
    try {
        const booking = await bookingDetails.find();
        res.json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
export default router;
