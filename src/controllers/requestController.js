import Request from '../schema/requestSchema.js';

const requestController = async (req, res) =>{
    const { date, type_service, description, userId } = req.body;

    if(!date) return res.status(400).json({msg: 'Escolha uma data'});

    if(!type_service) return res.status(400).json({msg:'Escolha o tipo do serviço'});

    if(!description) return res.status(400).json({msg: 'Descreva brevemente o que será feito'});

    if(!userId) return res.status(400).json({msg: 'ID do solicitante nao pode ficar em branco'});

    try {
        const newRequest = await Request.create({date, type_service, description, userId});
        if(newRequest) return res.status(201).json({msg:'Solicitacao efetuada com sucesso.'});
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({msg: 'Solicitação não pode ser processada, tente novamente mais tarde.'});        
    }
}

export default requestController;