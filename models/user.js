import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    username: {
        type: String,
        unique: [true, 'Username already exists'],
        required: [true, 'Username is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    first_name: {
        type: String,
        required: [true, 'First name is required']
    },
    last_name: {
        type: String,
        required: [true, 'Last name is required']
    },
    picture: {
        type: String,
        default: null
    }
});

const User = models.User || model('User', UserSchema);

export default User;