import mongoose from 'moongoose';
const postSchema = mongose.Schema({ title: string, message: String, author: String, tags: [String], like: { type: Number, default: 0 }, createdAt: { type: Date, default: new Date() }, });
const PostMessage = mongoose.model('Postmessage', postSchema);
export default PostMessage;