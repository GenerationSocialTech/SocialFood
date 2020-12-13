import { Postagem } from './Postagem';

export class Tema{
    public id: number;
    public tema:string;
    public ativo: boolean;
    public postagem: Postagem[]
}