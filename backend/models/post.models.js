import mongoose from 'mongoose';
import { ref } from 'pdfkit';
const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },
    body: {
        type: String,
        required: true

    },
    likes: {
        type: Number,
        default: 0

    },
    createdAt: {
        type: Date,
        default: Date.now

    },
    updatedAt: {
        type: Date,
        default: Date.now   

    },
    media: {
        type: String,
        default: ""

    },
    active: {
        type: Boolean,
        default: true
    },
    fileType: {
        type: String,
        default: ""
    }
});

export const Post = mongoose.model('Post', postSchema);
export default Post;

