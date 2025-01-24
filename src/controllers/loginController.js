import User from '../schema/userSchema.js';
import { comparePassword } from '..//utils/passwordUtils.js';


const loginController =  async (req, res) =>{
    const { user, password } = req.body;

    if(!user) return  res.status(400).json({ msg: 'Usuario está em branco.'});

    if(!password) return res.status(400).json({msg:'Digite sua senha.'});

    try {
        
        const userExist = await User.findOne({user});

        if(!userExist) return res.status(400).json({msg: 'Usuario não cadastrado.'});

        const isMatch = await comparePassword(password, userExist.userPassword);

        if(!isMatch) return res.status(400).json({msg: 'Senha inválida.'});

        return res.status(200).json({msg: 'Login efetuado com sucesso.'});
    
    } catch (error) {

        return res.status(500).json({msg: 'Erro ao validar as senhas tente novamente mais tarde.'});

    }
}

export default loginController;