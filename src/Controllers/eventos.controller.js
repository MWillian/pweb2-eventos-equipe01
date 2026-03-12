import { EventosService} from '../Services/eventos.services.js';

const eventosService = new EventosService();

export class EventosController{

    ListarEventos = (req,res, next) => {
        try {
            const eventos = eventosService.listar(req.query);
            res.json(eventos);
        } catch (error) {
          next(error);
        };
    };

    BuscarEventoPorId = (req, res, next) => {
        try {
            const {id} = req.params;
            const buscaId = eventosService.buscarPorId(id);
            res.status(200).json(buscaId);
        } catch (error) {
          next(error);
        };
    };
    
    criarEvento = (req, res, next) => {
        try {
            const novoEvento = req.body;
            const eventoCriado = eventosService.novoEvento(novoEvento);
            res.status(201).json(eventoCriado);
        } catch (error) {
          next(error);
        }
    };
    
    atualizarEvento = (req, res, next) => {
        try {
            const {id} = req.params;
            const eventoAtualizado = eventosService.atualizaEvento(id, req.body);
            res.status(200).json(eventoAtualizado);
        } catch (error) {
          next(error);
        }
    };
    
    deletarEvento = (req, res, next) => {
        try {
            const {id} = req.params;
            eventosService.removerEvento(id);
            return res.status(204).send();
        } catch (error) {
          next(error);
        }
    };
}

