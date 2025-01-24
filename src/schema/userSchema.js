import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const userSchema =  mongoose.Schema({
    userId:{
        type: String,
        required: true,
        unique: true,
        default: () => nanoid(10) 
    },
    userName:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    sector:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
export default User;