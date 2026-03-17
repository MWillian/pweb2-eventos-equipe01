import {Router} from 'express';
import {EventosController} from '../Controllers/eventos.controller.js';

const eventosRouter = Router();
const eventosController = new EventosController();
eventosRouter.get('/',eventosController.ListarEventos);
eventosRouter.get('/:id',eventosController.BuscarEventoPorId);
eventosRouter.post('/', eventosController.CriarEvento);
eventosRouter.put('/:id', eventosController.AtualizarEvento);
eventosRouter.delete('/:id', eventosController.DeletarEvento); 
eventosRouter.post('/:id/inscricao',eventosController.ReduzirQuantidadeVagas);
eventosRouter.patch('/:id/cancelar',eventosController.CancelarEvento)

export default eventosRouter;