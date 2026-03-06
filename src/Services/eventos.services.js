import {EventosDatabase} from "../Database/EventosDatabase.js";

const database = new EventosDatabase();
export function Listar(filtros) {
    const todosEventos = database.listarTodos();
    if(!filtros){
        return todosEventos;
    }else if (filtros.ativo) {
        const estaAtivo = filtros.ativo === 'true';
        return todosEventos.filter(evento => evento.ativo === estaAtivo);
    }
    return todosEventos;
}