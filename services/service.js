
const imageArray = [];
const hotelData = [
    {
        id: 1,
        name: "Sea Shell Hotel",
        location: "Cox's Bazar, Bangladesh",
        price: 1000,
        image: imageArray[0],
        freeRoomsWithTypes: [
            { roomType: "Single Room", roomNumber: 1 },
            { roomType: "Single Room", roomNumber: 2 },
            { roomType: "Single Room", roomNumber: 3 },
            { roomType: "Double Room", roomNumber: 4 },
            { roomType: "Double Room", roomNumber: 5 },
            { roomType: "Double Room", roomNumber: 6 },
            { roomType: "Suite", roomNumber: 7 },
            { roomType: "Suite", roomNumber: 8 },
            { roomType: "Suite", roomNumber: 9 },
        ],
        bookedRoomsWithDates: [],
        details: {
            welcomeMessage:
                "Welcome to Sea Shell Hotel, your haven of tranquility amidst the vibrant shores of Cox's Bazar. Experience the epitome of luxury and comfort as you immerse yourself in the breathtaking beauty of the Bay of Bengal.",
            services: ["Bar", "Gym", "Restaurant", "Swimming Pool"],
            serviceImages: imageArray.slice(4, 8),
            roomImages: imageArray.slice(0, 3),
            accommodation: [
                { roomType: "Single Room", price: 500, capacity: 1 },
                { roomType: "Double Room", price: 700, capacity: 2 },
                { roomType: "Suite", price: 1000, capacity: 3 },
            ],
            others: "Free Wi-Fi, Air Conditioning, Breakfast",
        },
    },
    {
        id: 2,
        name: "Radisson Blu Resort Cox's Bazar",
        location: "Cox's Bazar, Bangladesh",
        price: 800,
        image: imageArray[8],
        freeRoomsWithTypes: [
            { roomType: "Single Room", roomNumber: 1 },
            { roomType: "Single Room", roomNumber: 2 },
            { roomType: "Single Room", roomNumber: 3 },
            { roomType: "Double Room", roomNumber: 4 },
            { roomType: "Double Room", roomNumber: 5 },
            { roomType: "Double Room", roomNumber: 6 },
            { roomType: "Suite", roomNumber: 7 },
            { roomType: "Suite", roomNumber: 8 },
            { roomType: "Suite", roomNumber: 9 },
        ],
        bookedRoomsWithDates: [],
        details: {
            welcomeMessage:
                "Embrace endless indulgence at Radisson Blu Resort Cox's Bazar, where opulence meets the serenity of the golden sands. Indulge in unparalleled comfort and personalized service as you create unforgettable memories along the Bay of Bengal.",
            services: ["Bar", "Gym", "Restaurant", "Swimming Pool"],
            serviceImages: imageArray.slice(8, 12),
            roomImages: imageArray.slice(3, 6),
            accommodation: [
                { roomType: "Single Room", price: 400, capacity: 1 },
                { roomType: "Double Room", price: 600, capacity: 2 },
                { roomType: "Suite", price: 800, capacity: 3 },
            ],
            others: "Free Wi-Fi, Air Conditioning, Breakfast",
        },
    },
    {
        id: 3,
        name: "Sayeman Beach Resort",
        location: "Cox's Bazar, Bangladesh",
        price: 600,
        image: imageArray[16],
        freeRoomsWithTypes: [
            { roomType: "Single Room", roomNumber: 1 },
            { roomType: "Single Room", roomNumber: 2 },
            { roomType: "Single Room", roomNumber: 3 },
            { roomType: "Double Room", roomNumber: 4 },
            { roomType: "Double Room", roomNumber: 5 },
            { roomType: "Double Room", roomNumber: 6 },
            { roomType: "Suite", roomNumber: 7 },
            { roomType: "Suite", roomNumber: 8 },
            { roomType: "Suite", roomNumber: 9 },
        ],
        bookedRoomsWithDates: [],
        details: {
            welcomeMessage:
                "Escape to Sayeman Beach Resort, where the turquoise waters of the Bay of Bengal and the warmth of Bangladeshi hospitality await. Discover a harmonious blend of comfort, convenience, and affordability nestled amidst the tranquil shores of Cox's Bazar.",
            services: ["Bar", "Gym", "Restaurant", "Swimming Pool"],
            serviceImages: imageArray.slice(12, 16),
            roomImages: imageArray.slice(6, 9),
            accommodation: [
                { roomType: "Single Room", price: 300, capacity: 1 },
                { roomType: "Double Room", price: 500, capacity: 2 },
                { roomType: "Suite", price: 700, capacity: 3 },
            ],
            others: "Free Wi-Fi, Air Conditioning, Breakfast",
        },
    },
    {
        id: 4,
        name: "Long Beach Hotel",
        location: "Cox's Bazar, Bangladesh",
        price: 1200,
        image: imageArray[24],
        freeRoomsWithTypes: [
            { roomType: "Single Room", roomNumber: 1 },
            { roomType: "Single Room", roomNumber: 2 },
            { roomType: "Single Room", roomNumber: 3 },
            { roomType: "Double Room", roomNumber: 4 },
            { roomType: "Double Room", roomNumber: 5 },
            { roomType: "Double Room", roomNumber: 6 },
            { roomType: "Suite", roomNumber: 7 },
            { roomType: "Suite", roomNumber: 8 },
            { roomType: "Suite", roomNumber: 9 },
        ],
        bookedRoomsWithDates: [],
        details: {
            welcomeMessage:
                "Experience the epitome of luxury at Long Beach Hotel, where elegance meets the breathtaking panorama of the Bay of Bengal. Unwind in lavish accommodations, pamper yourself at our world-class Bar, and savor culinary delights as you create unforgettable memories in Cox's Bazar.",
            services: ["Bar", "Gym", "Restaurant", "Swimming Pool"],
            serviceImages: imageArray.slice(16, 20),
            roomImages: imageArray.slice(9, 12),
            accommodation: [
                { roomType: "Deluxe Room", price: 800, capacity: 2 },
                { roomType: "Executive Room", price: 1000, capacity: 2 },
                { roomType: "Sea View Suite", price: 1200, capacity: 3 },
            ],
            others: "Free Wi-Fi, Air Conditioning, Breakfast, Private Beach Access",
        },
    },
    {
        id: 5,
        name: "Golden Sands Resort",
        location: "Cox's Bazar, Bangladesh",
        price: 900,
        image: imageArray[32],
        freeRoomsWithTypes: [
            { roomType: "Single Room", roomNumber: 1 },
            { roomType: "Single Room", roomNumber: 2 },
            { roomType: "Single Room", roomNumber: 3 },
            { roomType: "Double Room", roomNumber: 4 },
            { roomType: "Double Room", roomNumber: 5 },
            { roomType: "Double Room", roomNumber: 6 },
            { roomType: "Suite", roomNumber: 7 },
            { roomType: "Suite", roomNumber: 8 },
            { roomType: "Suite", roomNumber: 9 },
        ],
        bookedRoomsWithDates: [],
        details: {
            welcomeMessage:
                "Discover paradise at Golden Sands Resort, where the sun-kissed beaches meet luxurious comfort. Immerse yourself in the beauty of Cox's Bazar while enjoying top-notch amenities and services.",
            services: ["Bar", "Gym", "Restaurant", "Swimming Pool"],
            serviceImages: imageArray.slice(20, 24),
            roomImages: imageArray.slice(12, 15),
            accommodation: [
                { roomType: "Standard Room", price: 600, capacity: 1 },
                { roomType: "Deluxe Room", price: 800, capacity: 2 },
                { roomType: "Ocean View Suite", price: 1000, capacity: 3 },
            ],
            others: "Free Wi-Fi, Air Conditioning, Breakfast",
        },
    },
    {
        id: 6,
        name: "Pristine Paradise Resort",
        location: "Cox's Bazar, Bangladesh",
        price: 700,
        image: imageArray[40],
        freeRoomsWithTypes: [
            { roomType: "Single Room", roomNumber: 1 },
            { roomType: "Single Room", roomNumber: 2 },
            { roomType: "Single Room", roomNumber: 3 },
            { roomType: "Double Room", roomNumber: 4 },
            { roomType: "Double Room", roomNumber: 5 },
            { roomType: "Double Room", roomNumber: 6 },
            { roomType: "Suite", roomNumber: 7 },
            { roomType: "Suite", roomNumber: 8 },
            { roomType: "Suite", roomNumber: 9 },
        ],
        bookedRoomsWithDates: [],
        details: {
            welcomeMessage:
                "Escape to Pristine Paradise Resort, where serenity meets sophistication. Experience the perfect blend of nature and luxury along the shores of Cox's Bazar, making your stay truly memorable.",
            services: ["Bar", "Gym", "Restaurant", "Swimming Pool"],
            serviceImages: imageArray.slice(24, 28),
            roomImages: imageArray.slice(15, 18),
            accommodation: [
                { roomType: "Garden View Room", price: 500, capacity: 2 },
                { roomType: "Sea View Room", price: 600, capacity: 2 },
                { roomType: "Luxury Suite", price: 700, capacity: 3 },
            ],
            others: "Free Wi-Fi, Air Conditioning, Breakfast",
        },
    },
];


import Hotel from "../models/hotelDetails.js";
import BookingDetails from "../models/bookingDetails.js";





// Function to post all hotel data to the database
const postAll = async () => {
    // await Hotel.insertMany(hotelData);
    await Hotel.updateMany(hotelData);
};






async function checkAvailability(hotelId, roomType, checkInDate, checkOutDate) {
    const hotel = await Hotel.findOne({ id: hotelId });
    if (!hotel) return false;

    // Check if room is available
    return hotel.bookedRoomsWithDates.every(booking => {
        return booking.roomType !== roomType ||
            booking.checkOutDate <= checkInDate ||
            booking.checkInDate >= checkOutDate;
    });
}

async function bookRoom(customerDetails, hotelId, roomType, roomNumber, checkInDate, checkOutDate, paymentDetails) {
    if (!await checkAvailability(hotelId, roomType, checkInDate, checkOutDate)) {
        return false; // Room not available
    }
    
   const hotel = Hotel.findOne({ id: hotelId });
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
                    roomNumber,
                    checkInDate,
                    checkOutDate,
                },
            ],
            
        },
        paymentDetails,
    });

    await booking.save();

    // Update Hotel document
    await Hotel.updateOne(
        { id: hotelId },
        { $push: { bookedRoomsWithDates: { roomType, roomNumber, checkInDate, checkOutDate } } }
    );

    return true; // Booking successful
}

async function cancelBooking(bookingId) {
    const booking = await BookingDetails.findById(bookingId);
    if (!booking) return false;

    // Update Hotel document to remove the booking
    await Hotel.updateOne(
        { id: booking.hotelDetails.id },
        { $pull: { bookedRoomsWithDates: { roomNumber: booking.hotelDetails.bookedRoomsWithDates[0].roomNumber } } }
    );

    await BookingDetails.deleteOne({ _id: bookingId });

    return true; // Cancellation successful
}

async function autoFreeRoom() {
    const today = new Date();

    const bookings = await BookingDetails.find({
        'hotelDetails.bookedRoomsWithDates.checkOutDate': { $lt: today }
    });

    bookings.forEach(async booking => {
        await Hotel.updateOne(
            { id: booking.hotelDetails.id },
            { $pull: { bookedRoomsWithDates: { roomNumber: booking.hotelDetails.bookedRoomsWithDates[0].roomNumber } } }
        );

        await BookingDetails.deleteOne({ _id: booking._id });
    });

    return true; // All outdated bookings cleared
}

export {
    
    checkAvailability,
    bookRoom,
    cancelBooking,
    autoFreeRoom
};
