import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-post-tema',
  templateUrl: './post-tema.component.html',
  styleUrls: ['./post-tema.component.css']
})
export class PostTemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private temaService : TemaService,
    private router: Router
  ) { }

  ngOnInit(){
    this.findAllTemas()
    this.findByIdtema()
  }

  findAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })

  }

  findByIdtema(){
    this.temaService.getByIdTema(this.tema.id).subscribe((resp: Tema)=>{
      this.tema= resp;
    })
  }

  cadastrar(){
    if(this.tema.tema == null){
      alert("Preencha todos os campos!!!")
    }else{
      this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
        this.tema = resp
        this.router.navigate(['/feed'])
        alert("Tema cadastrado com sucesso!!!")
      })
    }
  }


}
