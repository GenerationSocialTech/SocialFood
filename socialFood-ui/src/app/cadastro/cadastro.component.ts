import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User();
  senha: string;


  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    this.user.ong= false;

  }


  conferirSenha(event: any){
    this.senha = event.target.value

  }

  marcarCheckbox(e: any){
    this.user.ong = e.target.checked;
  }

  cadastrar() {
        if ( this.senha === this.user.senha ) {
          this.authService.cadastrar(this.user).subscribe((resp: User) => {
            this.user = resp
            this.router.navigate(['/login'])
            this.alert.showAlertSuccess('Usuário cadastrado com sucesso!')
          }, err => {
            console.log(`Erro cod: ${err.status}`)
            if (err.status==400) {
             this.alert.showAlertDanger("usuario ja cadastrado")
            }
          })
        } else {
          this.alert.showAlertInfo('Suas senhas não conferem')
        }
  }

}
