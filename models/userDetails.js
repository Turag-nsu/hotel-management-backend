import mongoose from "mongoose";

// Define the BookingDetails schema
const userDetailsSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    phone: String,
    password: String,
});

const UserDetails = mongoose.model("UserDetails", userDetailsSchema);

export default UserDetails;