import { Tema } from './Tema';
import { User } from './User';



export class Postagem{
    public id: number;
    public titulo: string;
    public descricao: string;
    public data: Date;
    public imagem:string;
    public status: boolean;
    public regiao: string;
    public tema: Tema;
    public usuario: User;
}