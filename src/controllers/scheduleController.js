import Request from "../schema/requestSchema.js";

const scheduleController = async (req, res) =>{
    const { request_id, date_planned, new_status } = req.body;


    if(!request_id) return res.status(400).json({msg: 'ID da solicitação invalido.'});

    if(!date_planned) return res.status(400).json({msg: 'Data de agendamento inválida.'});

    if(!new_status) return res.status(400).json({msg: 'Status inválido.'});

    const request = await Request.findOne({id:request_id});
    
    if(request){
        request.status = new_status;

        if(date_planned){
            const [ano, mes, dia] = date_planned.split('-');

            request.date_planned = `${dia}/${mes}/${ano}`;
        }

        await request.save()

        return res.status(200).json({msg: 'Solicitação agendada com sucesso.'});
    }
}

export default scheduleController;