import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  sair () {  
    environment.token = ''
    environment.nome = ''
    environment.imagem = ''
    environment.sobre = ''
    environment.ong = false
    environment.id = 0  
    this.router.navigate(['/login'])
  }
}
