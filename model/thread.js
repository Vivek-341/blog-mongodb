import mongoose from 'mongoose';

const ThreadSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    blogId: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    }
});


const thread = mongoose.model('thread', ThreadSchema);

export default thread;