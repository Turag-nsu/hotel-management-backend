
import Hotel from "../models/hotelDetails.js";
import BookingDetails from "../models/bookingDetails.js";
import UserDetails from "../models/userDetails.js";

async function bookRoom(customerDetails, hotelId, roomType, checkInDate, checkOutDate, paymentDetails) {
    
    const hotel = await Hotel.findOne({ id: hotelId });
    // console.log(hotel);
    const booking = new BookingDetails({
        customerDetails,
        hotelDetails: {
            name: hotel.name,
            location: hotel.location,
            price: hotel.price,
            image: hotel.image,
            bookedRoomsWithDates: [
                {
                    roomType,
                    checkInDate,
                    checkOutDate,
                },
            ],

        },
        paymentDetails,
    });
    // console.log(booking);
    await booking.save();

    // Update Hotel document
    await Hotel.updateOne(
        { id: hotelId },
        { $push: { bookedRoomsWithDates: { roomType, checkInDate, checkOutDate } } }
    );

    return true; // Booking successful
}

async function cancelBooking(bookingId) {
    const booking = await BookingDetails.findOne({ id: bookingId });
    if (!booking) return false;

    // Update Hotel document to remove the booking
    await Hotel.updateOne(
        { id: booking.hotelDetails.id },
        { $pull: { bookedRoomsWithDates: { roomNumber: booking.hotelDetails.bookedRoomsWithDates[0].roomNumber } } }
    );

    await BookingDetails.deleteOne({ _id: bookingId });

    return true; // Cancellation successful
}
/*
const userDetailsSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    phone: String,
    password: String,
});
*/
const successLogin = async (userEmail, userPassword) => {
    const userDetails = await UserDetails.findOne({ email: userEmail, password: userPassword });
    if (!userDetails) return false;
    if (userDetails.password !== userPassword) return false;
    return true;
}



export {
    successLogin,
    bookRoom,
    cancelBooking,

};
