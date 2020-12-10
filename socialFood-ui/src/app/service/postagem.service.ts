import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient ) { }

  token ={
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllPostagens():Observable<Postagem[]>{
    return this.http.get<Postagem[]>('http://localhost:9000/postagens', this.token)
  }

  postPostagem( postagem: Postagem):Observable<Postagem>{
    return this.http.post<Postagem>('http://localhost:9000/postagens', postagem, this.token)
  }

}
