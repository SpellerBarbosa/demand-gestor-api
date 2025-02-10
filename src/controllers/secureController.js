import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


const secureController = async (req, res) =>{
    try {
        const authHeader = req.headers.authorization;

        if(!authHeader){
            return res.status(400).json({msg: 'Token não fornecido.'})
        }

        const token = authHeader.split(" ")[1];
        
        const decoded = jwt.verify(token, process.env.SECRET)

        return res.status(200).json({ token: decoded });

    } catch (error) {
        
        if(error.name === "TokenExpiredError"){
            return res.status(401).json({ msg: 'Token Expirado! '});
        }

        if(error.name === "JsonWebTokenError"){
            return res.status(401).json({ msg: 'Token inválido.'});
        }

        return res.status(500).json({ msg: 'Erro interno do servidor.'});
    }
}

export default secureController;