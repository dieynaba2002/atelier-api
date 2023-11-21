import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.css']
})
export class ListeArticleComponent implements OnInit {
  // declaration de notre tableau d'article
  articles: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {

    this.apiService.getArticles().subscribe((data) => {
       console.log(data);
      this.articles = data;
    });
  }
  

}
