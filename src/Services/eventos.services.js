import {EventosDatabase} from "../Database/EventosDatabase.js";

const database = new EventosDatabase();

export class EventosService{

    listar(filtros) {
        //implementar try
        const todosEventos = database.listarTodos(); 
        if (filtros.ativo) {
            const estaAtivo = filtros.ativo === 'true';
            return todosEventos.filter(evento => evento.ativo === estaAtivo);
        }if (filtros.modalidade) {
            return todosEventos.filter(evento => evento.modalidade === filtros.modalidade);
        }
        return todosEventos;
    };

    buscarPorId(id) {
        try {
            const eventoPorId = database.buscarPorId(id);
            return eventoPorId;
        } catch (error) {
            //implementar erro
        }
    };

    novoEvento(dados) {
        //implementar try
        const inserirEvento = database.inserir(dados);
        return inserirEvento;
    };

    atualizaEvento(id, dados) {
        //try
        const atualizarEvento = database.atualizar(id, dados);
        return atualizarEvento;
    };

    removerEvento(id) {
        //try
        const removerEvento = database.remover(id);
        return removerEvento;
    };
}