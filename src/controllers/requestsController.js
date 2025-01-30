import Request from "../schema/requestSchema.js";

const requestsController = async (req, res) =>{
    try {
        const requests = await Request.aggregate([
            {
                $lookup:{
                    from: 'users',
                    localField: 'userId',
                    foreignField: 'userId',
                    as: 'requests'
                }
            }
        ])

        res.status(200).json({requests: requests})
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Erro ao buscar as solicitações'});
    }
}

export default requestsController;