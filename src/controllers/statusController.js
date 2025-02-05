import Request from "../schema/requestSchema.js";

const statusController = async (req, res) =>{
    const { id } = req.body;


    if(!id) return res.status(400).json({msg: 'não foi fornecido um id de usuarios para a busca'});

    try {
        const requestUser = await Request.find({userId: id});
        console.log(requestUser)

        if(!requestUser) return res.status(400).json({msg: 'falha na busca das solicitações'});

        return res.status(200).json({ requestUser });
    } catch (error) {
        console.error(error);
    }
}

export default statusController;