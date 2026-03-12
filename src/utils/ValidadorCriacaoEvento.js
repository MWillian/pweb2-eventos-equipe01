import { AppError } from "../utils/AppError.js";
import { EnumModalidade } from "../enums/modalidade.enum.js";

export class ValidadorCriacaoEvento{
    constructor(dados){
      const {titulo, descricao,vagas,vagasDisponiveis,modalidade,cargaHoraria,ativo,dataCriacao} = dados;
        this.titulo = titulo;
        this.descricao = descricao;
        this.vagas = vagas;
        this.vagasDisponiveis = vagasDisponiveis;
        this.modalidade = modalidade;
        this.cargaHoraria = cargaHoraria;
        this.ativo = ativo;
        this.dataCriacao = dataCriacao;
    }
    Validar(){
        if (typeof this.titulo !== 'string') {
            throw new AppError('Nome do evento inválido.',400);
        };
        if (typeof this.titulo !== 'string'){
            throw new AppError('Descrição do evento inválida.',400);
        };
        if (typeof this.vagas !== 'number' || this.vagas < 0) {
            throw new AppError('Quantidade de vagas deve ser um número positivo.',400);
        };
        if (typeof this.vagasDisponiveis !== 'number' || this.vagasDisponiveis < 0) {
            throw new AppError('Quantidade de vagas disponíveis deve ser um número positivo.',400);
        };
        if (this.vagasDisponiveis > this.vagas) {
            throw new AppError('Quantidade de vagas disponíveis não podem ser maior que as vagas total.',400);
        };

        const modalidades = Object.values(EnumModalidade);
        if (!modalidades.includes(this.modalidade)) {
            throw new AppError('Modalidade não existe.',400);
        };
        if (typeof this.cargaHoraria !== 'number' || this.cargaHoraria <= 0) {
            throw new AppError('Carga horária deve ser um número maior que 0.',400);
        };
        if (typeof this.ativo !== 'boolean') {
            throw new AppError('Status do evento inválido.',400);
        };

        if (!this.dataCriacao) {
            throw new AppError('A data do evento é obrigatória.', 400);
        };

        const dataEvento = new Date(this.dataCriacao);
        const agora = new Date();

        if (isNaN(dataEvento.getTime())) {
            throw new AppError('Data do evento em formato inválido.', 400);
        };

        if (dataEvento > agora) {
            throw new AppError('A data do evento não pode ser futura.', 400);
        };
    }
}