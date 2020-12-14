import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key= 'data'
  reverse = true

  postagem : Postagem = new Postagem()
  listaPostagens: Postagem[]
  titulo: string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  nomeTema: string


  constructor(
    private postagemService : PostagemService,
    private temaService: TemaService,
    private alert: AlertasService,
    private router: Router
  ) { }

  ngOnInit(){

    let token = environment.token

    if(token == ''){
      this.router.navigate(['/login'])
      this.alert.showAlertDanger("Faça login antes de entrar no feed")
    }

    window.scroll(0, 0)
    this.findAllPostagens()
    this.findAllTemas()
  }

  marcar(e : any){
    this.tema.ativo = e.target.checked;
  }

  findAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp : Postagem[]) =>{
      this.listaPostagens = resp
    })

  }
  
  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema
    
    if(this.postagem.titulo === " " ||  this.postagem.tema === null || this.postagem.regiao ===  " " || this.postagem.descricao === " "){
      this.alert.showAlertDanger("Preencha todos os campos antes de publicar!!!")
     }else{
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) =>{
        this.postagem = resp
        this.postagem = new Postagem()
        this.alert.showAlertSuccess("Postado com sucesso!!")
        this.findAllPostagens()
      })
    } 

  }

  findAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })

  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema= resp;
    })
  }

  findByTituloPostagem(){
    if(this.titulo === ''){
      this.findAllPostagens()

    }else{
      this.postagemService.getByTituloPostagem(this.titulo).subscribe((resp: Postagem[])=>{
        this.listaPostagens = resp
      })

    }
  }

  findByNomeTema(){
    if(this.nomeTema === ''){
      this.findAllTemas()

    }else{
      this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[])=>{
        this.listaTemas= resp;
      })

    } 
  }

}
