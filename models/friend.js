import { Schema, models, model } from 'mongoose';

const FriendSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    friendId: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: (new Date()).toISOString(),
    }
});

const Friend = models.Friend || model('Friend', FriendSchema);

export default Friend;