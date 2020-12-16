import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { AuthService } from '../service/auth.service';
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

  key= 'data'
  reverse = true

  constructor(
    private postagemService:PostagemService,
    public auth: AuthService
  ) { }

  ngOnInit(){
    this.findAllPostagensTrue()
  }

  findAllPostagensTrue(){
    this.postagemService.getByStatusTrue().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }

}
