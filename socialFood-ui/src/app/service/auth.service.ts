import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  logar(userLogin: UserLogin): Observable <UserLogin>{
    return this.http.post<UserLogin>('https://generation-social-food.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user : User): Observable <User>{
    return this.http.post<User>('https://generation-social-food.herokuapp.com/usuarios/cadastrar', user)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://generation-social-food.herokuapp.com/usuarios/${id}`)
  }

  btnSair(){
    let ok = false
    let token = environment.token

    if (token != '') {
      ok = true
    }
    return ok
  }

  btnLogin() {
    let ok = false
    let token = environment.token

    if (token == '') {
      ok = true
    }
    return ok
  }

  userOng(){
    let ok = false
    let ong = environment.ong

    if (ong == true) {
      ok = true
    }
    return ok
  }

  

 

}
