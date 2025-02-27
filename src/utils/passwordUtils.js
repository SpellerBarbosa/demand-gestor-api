import bcrypt from 'bcrypt';

export const criptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
}

export const comparePassword = async (password, hashPassword) =>{
    
    const isMatch = await bcrypt.compare(password, hashPassword);

    if(!isMatch){
        return false;
    }
    return true;

}