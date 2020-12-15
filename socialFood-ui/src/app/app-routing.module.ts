import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { FeedComponent } from './feed/feed.component';
import { GetPostagemAtivaComponent } from './get-postagem-ativa/get-postagem-ativa.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,},
  {path: 'feed', component: FeedComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'sobre-nos', component: SobreNosComponent},
  {path: 'cadastro-tema', component: PostTemaComponent},
  {path: 'editar-post/:id', component: PutPostagemComponent},
  {path: 'delete-post/:id', component: DeletePostagemComponent},
  {path: 'editar-tema/:id', component: PutTemaComponent},
  {path: 'delete-tema/:id', component: DeleteTemaComponent},
  {path: 'postagens-ativas', component: GetPostagemAtivaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
