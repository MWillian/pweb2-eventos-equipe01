import { 
    Listar,
 } from '../Services/eventos.services.js';

export function ListarEventos (req,res){
    const eventos = Listar(req.query);
    res.json(eventos);
};
