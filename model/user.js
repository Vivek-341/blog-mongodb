import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email:{
        type: String,
        required: false
    },
    userName: {
        type: String,
        required: false,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


const user = mongoose.model('user', userSchema);

export default user;