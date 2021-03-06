import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: {type: String},
    imageUrl: {type: String},
    country: {type: Object},
    city: {type: String},
    age: {type: String},
    height: {type: String},
    weight: {type: String},
    description: {type: String}
})

const User = mongoose.model("User", userSchema);

export default User;