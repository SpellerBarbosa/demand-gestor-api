import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


const Auth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ msg: "Acesso negado, token nao fornecido" });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.SECRET);

        req.user = decoded;

        return next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ msg: 'Acesso negado, token expirado' });
        }

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ msg: "Acesso negado, token invalido" })
        }

        return res.status(500).json({ msg: "Erro interno do servidor." });
    }
}

export default Auth;