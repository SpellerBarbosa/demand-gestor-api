import User from '../schema/userSchema.js';
import { comparePassword } from '../utils/passwordUtils.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


const loginController =  async (req, res) =>{
    const { user, password } = req.body;

    if(!user) return  res.status(400).json({ msg: 'Usuario está em branco.'});

    if(!password) return res.status(400).json({msg:'Digite sua senha.'});

    try {
        
        const userExist = await User.findOne({userName: user});
        
        if(!userExist) return res.status(400).json({msg: 'Usuario não cadastrado.'});

        const isMatch = await comparePassword(password, userExist.password);
     
        if(!isMatch) return res.status(400).json({msg: 'Senha inválida.'});

        
        const userResponse = userExist.toObject();
        delete userResponse.password
        const token = jwt.sign({
            id:userResponse.userId, 
            user: userResponse.userName, 
            sector: userResponse.sector,
            role: userResponse.role
        }, 
        process.env.SECRET, 
        {expiresIn: '1'});

        return res.status(200).json({msg: 'Login efetuado com sucesso.', token: token});
    
    } catch (error) {

        return res.status(500).json({msg: 'Erro ao validar as senhas tente novamente mais tarde.'});

    }
}

export default loginController;