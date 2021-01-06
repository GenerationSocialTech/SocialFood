import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { AlertasService } from '../service/alertas.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-postagem-true',
  templateUrl: './postagem-true.component.html',
  styleUrls: ['./postagem-true.component.css']
})
export class PostagemTrueComponent implements OnInit {

  postagem: Postagem = new Postagem()
  idPost: number

  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    this.idPost = this.route.snapshot.params["id"]
    this.findByIdPostagem(this.idPost)
    
  }

  findByIdPostagem(id : number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem)=>{
      this.postagem = resp;
    })

  }

  postagemTrue(){
    this.postagem.status = true;
    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) =>{
      this.postagem = resp
      this.router.navigate(['/feed'])
      this.alert.showAlertSuccess("Postagem marcada com sucesso")
    }, err=>{
      if(err.status == '500'){
        this.alert.showAlertDanger("Preencha todos os campos corretamente antes de enviar!")
      }
    })
  }



  btnNao(){
    this.router.navigate(['/feed'])
  }

}
