import { EventosService} from '../Services/eventos.services.js';

const eventosService = new EventosService();

export class EventosController{
    
    ListarEventos = (req,res) => {
        const eventos = eventosService.listar(req.query);
        res.status(200).json(eventos);
    };

    BuscarEventoPorId = (req, res) => {
        const buscaId = eventosService.buscarPorId(req.params.id);
        res.status(200).json(buscaId);
    };
    
    criarEvento = (req, res) => {
        const criaEventos = eventosService.novoEvento(req.body);
        res.status(201).json(criaEventos)
    };
    
    atualizarEvento = (req, res) => {
        const atualizaEventos = eventosService.atualizaEvento(Number(req.params.id), req.body);
        res.status(201).json(atualizaEventos);
    };
    
    deletarEvento = (req, res) => {
        const id = Number(req.params.id);
        const eventoDeletado = eventosService.removerEvento(id);
        return res.status(200).json({ 
            mensagem: "Evento removido com sucesso!", 
            eventoDeletado
        });
    };
}

