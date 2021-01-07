import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { TemaService } from '../service/tema.service';


@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {

  

  nome:  String = environment.nome
  image: string = environment.imagem
  sobre: string = environment.sobre


  constructor(
    private router:Router    
  ) { }

  ngOnInit(){
  }

  

  

}
