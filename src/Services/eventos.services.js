import {EventosDatabase} from "../Database/EventosDatabase.js";
import { AppError } from "../utils/AppError.js";
import {ValidadorCriacaoEvento} from '../utils/ValidadorCriacaoEvento.js'

const database = new EventosDatabase();

export class EventosService{
    
    listar(filtros) {
        let eventos = database.listarTodos(); 

        if (filtros.ativo !== undefined) {
            if (filtros.ativo !== 'true' && filtros.ativo !== 'false') {
                throw new AppError('Filtro de status inválido.',400);
            }
            const estaAtivo = filtros.ativo === 'true';
            eventos = eventos.filter(e => e.ativo === estaAtivo);
        };

        if (filtros.modalidade) {
             if (filtros.modalidade !== 'presencial' && filtros.modalidade !== 'remoto' && filtros.modalidade !== 'hibrido') {
                throw new AppError('Filtro de status modalidade inválido.',400);
            }
            eventos = eventos.filter(e => e.modalidade === filtros.modalidade);
        };

        if (filtros.vagasMin !== undefined) {
            const min = Number(filtros.vagasMin);
            if(!isNaN(min)){
                eventos = eventos.filter(e => e.vagasDisponiveis >= min);
            };
        }
        return eventos;
    };
    
    buscarPorId(id) {
        this.validateId(id);
        const idNumerico = Number(id);
        const eventoPorId = database.buscarPorId(idNumerico);
        if (eventoPorId == null) {
            throw new AppError('Evento não encontrado.',404);
        };
        return eventoPorId;
    };
    
    novoEvento(dados) {
        const validadorCriarEventos = new ValidadorCriacaoEvento(dados);
        validadorCriarEventos.Validar();
        const inserirEvento = database.inserir(dados);
        return inserirEvento;
    };
    
    atualizaEvento(id, dados) {
        const eventoAAtualizar = this.buscarPorId(id);
        const atualizarEvento = database.atualizar(id, dados);
        return atualizarEvento;
    };

    removerEvento(id) {
        const eventoADeletar = this.buscarPorId(id);
        const idNumerico = Number(id);
        database.remover(idNumerico);
    };

    validateId(id){
        if (!id || isNaN(id) || id < 0) {
            throw new AppError('Id inválido.',400);
        };
    }
}