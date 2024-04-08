import mongoose from "mongoose";

import { Schema } from "mongoose";

const User  = mongoose.model('User', new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    whatsapp: {
        type: Number,
        required: true
    },
}))

export default User