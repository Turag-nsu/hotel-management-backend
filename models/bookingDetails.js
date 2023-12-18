import mongoose from 'mongoose';


// Define the BookingDetails schema
const bookingDetailsSchema = new mongoose.Schema({
    id: Number,
    customerDetails: {
        name: String,
        email: String,
        phone: String,
    },
    hotelDetails: {
        name: String,
        location: String,
        price: Number,
        image: String,
        bookedRoomsWithDates: [
            {
                roomType: String,
                checkInDate: Date,
                checkOutDate: Date,
            },
        ],
    },
    paymentDetails: {
        paymentMethod: String,
        paymentStatus: String,
        paymentId: String,
    },
});

// Create the BookingDetails model
const BookingDetails = mongoose.model('BookingDetails', bookingDetailsSchema);

export default BookingDetails;


