import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeArticleComponent } from './liste-article/liste-article.component';

const routes: Routes = [
  {path: 'liste-article', component:ListeArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
