import mongoose from 'mongoose';

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
        required: false   
    },
    createdDate: {
        type: Date
    }
});


const blog = mongoose.model('blog', BlogSchema);

export default blog;