export interface Autonomo {
    id: string;
    nome_propietario: string;
    telefone_comercial: string;
    perfil_path: string;
    servico: string;
    sobre: string;
    empresa: string;
    fazer: string;
    nota: number;
    endereco: string;
    cep: string;
    cidade: string;
    numero: string;
    estado: string;
    email: string;
    image_paths: string;

    avaliacoes: Avaliacoes[];
}

export interface Avaliacoes {
    id: string;
    nome: string;
    data: string;
    nota: string;
    comentario: string;
}
