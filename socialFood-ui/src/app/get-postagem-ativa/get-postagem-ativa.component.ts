import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-get-postagem-ativa',
  templateUrl: './get-postagem-ativa.component.html',
  styleUrls: ['./get-postagem-ativa.component.css']
})
export class GetPostagemAtivaComponent implements OnInit {

  postagem : Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema()
  listaTemas: Tema[]


  key= 'data'
  reverse = true

  constructor(
    private postagemService:PostagemService,
    private temaService: TemaService
  ) { }

  ngOnInit(){
  }

}
