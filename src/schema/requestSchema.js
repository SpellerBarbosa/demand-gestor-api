import mongoose from "mongoose";
import { nanoid } from 'nanoid';

const requestSchema =  new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true,
        default: ()=> nanoid(10)
    },
    date:{
        type: String,
        required: true,
    },
    type_service:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        required: true,
        default: 'aguardando',
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId, // transfornando o user id em objeto para acessar os dados do usuario
        ref: 'User', // referenciando a colection users
        required: true,
    }
});

const Request = mongoose.model('request', requestSchema);
export default Request;