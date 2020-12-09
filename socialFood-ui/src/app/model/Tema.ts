import { Postagem } from './Postagem';

export class Tema{
    public id: number;
    public tema:string;
    public ativo: boolean;
    public perecivel: boolean;
    public postagem: Postagem[]
}