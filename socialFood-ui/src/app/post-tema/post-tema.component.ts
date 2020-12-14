import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
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
    private router: Router,
    private alert: AlertasService
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
      this.alert.showAlertDanger("Preencha todos os campos!!!")
    }else{
      this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
        this.tema = resp
        this.router.navigate(['/feed'])
        this.alert.showAlertSuccess("Tema cadastrado com sucesso!!!")
      })
    }
  }


}
