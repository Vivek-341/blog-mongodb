import mongoose from 'mongoose';

const ThreadSchema = mongoose.Schema({
    blogId: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    comments: {
        type: String,
        required: true
    }
});


const thread = mongoose.model('thread', ThreadSchema);

export default thread;