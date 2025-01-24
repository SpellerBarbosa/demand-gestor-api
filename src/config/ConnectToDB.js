import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const ConnectToDB = await mongoose.connect(process.env.URI, {
    dbName: 'demandDB',
    serverSelectionTimeoutMS: 3000,
})
.then(()=>{
    console.log('Banco de dados conectado.');
})
.catch((err) => console.log(`Erro ao connectar ao banco de dados ${err}`));