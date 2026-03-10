import { listar, 
    buscarPorId,
    novoEvento,
    atualizaEvento,
    removerEvento,
} from '../Services/eventos.services.js';

export const ListarEventos = (req,res) => {
    const eventos = listar(req.query);
    res.status(200).json(eventos);
};

export const BuscarEventoPorId = (req, res) => {
    const buscaId = buscarPorId(req.params.id);
    res.status(200).json(buscaId);
};

export const criarEvento = (req, res) => {
    const criaEventos = novoEvento(req.body);
    res.status(201).json(criaEventos)
};

export const atualizarEvento = (req, res) => {
    const atualizaEventos = atualizaEvento(Number(req.params.id), req.body);
    res.status(201).json(atualizaEventos);
};

export const deletarEvento = (req, res) => {
    const id = Number(req.params.id);
    const eventoDeletado = removerEvento(id);

    return res.status(200).json({ 
        mensagem: "Evento removido com sucesso!", 
        eventoDeletado
    }
    );
};
