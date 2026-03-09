import {Router} from 'express';
import {
    ListarEventos,
    BuscarEventoPorId,
    criarEvento,
    atualizarEvento,
    deletarEvento
} from '../Controllers/eventos.controller.js';

const router = Router();
router.get('/',ListarEventos);
router.get('/:id',BuscarEventoPorId);
router.post('/', criarEvento);
router.put('/:id', atualizarEvento);
router.delete('/:id', deletarEvento);

export default router;