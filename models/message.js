import { Schema, model, models } from 'mongoose';

const MessageSchema = new Schema({
    content: {
        type: String,
        required: [true, 'Message content is required'],
    },
    sourceId: {
        type: String,
        required: true,
    },
    targetId: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
        default: (new Date()).toISOString(),
    }
});

const Message = models.Message || model('Message', MessageSchema);

export default Message;