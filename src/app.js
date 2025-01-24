import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/routes.js';
import { ConnectToDB } from './config/ConnectToDB.js';
dotenv.config();

class App{
    constructor(){
        this.server = express();
        this.port = process.env.PORT || 3001;
        ConnectToDB;

        this.middlewares();
        this.router();
    }

    middlewares(){
        this.server.use(express.json());
        this.server.use(cors());
    }

    router(){
        this.server.use(routes);
    }

    start(){
        this.server.listen(this.port, () => {
            console.log("Api iniciada");
            console.log(`Servindo a rota http://localhost:${this.port}/api`);
        })
    }
}

export default App;