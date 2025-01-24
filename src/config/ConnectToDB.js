import mongoose from 'mongoose';

export const ConnecToDB = await mongoose.connect(process.env.URI, {
    dbName: 'demandDB',
    serverSelectionTimeoutMS: 3000,
})
.then(()=>{
    console.log('Banco de dados conectado.');
})
.catch((err) => console.log(`Erro ao connectar ao banco de dados ${err}`));