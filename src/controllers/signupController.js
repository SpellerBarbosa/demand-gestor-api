import User from '../schema/userSchema.js';
import { criptPassword } from '../utils/passwordUtils.js';

const signupController = async (req, res) =>{
    const { user, password, sector, role } = req.body

    if(!user) return res.status(400).json({msg: 'Digite o nome de usuario'});

    if(!password) return res.status(400).json({msg: 'Digite sua senha'});

    if(!sector) return res.status(400).json({msg: 'Selecione o setor '});

    if(!role) return res.status(400).json({msg:'Selecione o tipo de permissão'});

    try {
        const userExist = await User.findOne({userName: user.toLowerCase().trim()});

        if(userExist) return res.status(409).json({msg: "Usuario já consta no banco de dados"});

        const hashPassword = await criptPassword(password);

        if(!hashPassword) return res.status(400).json({msg: 'Falhar ao criptografar a senha tente novamente mais tarde.'});

        const newUser = await User.create({ 
            userName: user.toLowerCase().trim(), 
            password: hashPassword, 
            sector: sector.toLowerCase().trim(), 
            role: role.toLowerCase().trim()
        });

        if(!newUser) return res.status(400).json({msg: 'Falha ao cadastrar usuario.'});

        return res.status(201).json({msg: 'Usuario cadastrado com sucesso.'});

    } catch (error) {
        res.status(500).json({msg: 'Falha no servidor, tente novamente mais tarde.'});
        return
    }
 }

export default  signupController;