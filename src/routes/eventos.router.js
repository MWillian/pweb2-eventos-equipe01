import {Router} from 'express';
import {EventosController} from '../Controllers/eventos.controller.js';

const router = Router();
const eventosController = new EventosController();
router.get('/',eventosController.ListarEventos);
router.get('/:id',eventosController.BuscarEventoPorId);
router.post('/', eventosController.criarEvento);
router.put('/:id', eventosController.atualizarEvento);
router.delete('/:id', eventosController.deletarEvento);

export default router;