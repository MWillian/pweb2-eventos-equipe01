import {Router} from 'express';
import {
    ListarEventos,
} from '../Controllers/eventos.controller.js';

const router = Router();
router.get('/',ListarEventos);

export default router;