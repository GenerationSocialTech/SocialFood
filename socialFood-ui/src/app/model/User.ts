import { Postagem } from "./Postagem";

export class User{

    public id: number;
    public nome: string;
    public email: string;
    public senha: string;
    public ong: boolean;
    public imagem: string;
    public sobre: string;
    public postagem: Postagem[];
}