import { Component } from '@angular/core';

import { ArticleModel } from './article-details/article.model';
import { ArticleListService } from './article-list.service';

@Component({
	selector: 'article-list',
	templateUrl: './article-list.component.html'
})
export class ArticleListComponent {
	articles: ArticleModel[];

	constructor(private service: ArticleListService){

	}

	ngOnInit(){
		this.service.getArticles()
		.subscribe(response => this.articles = response);
	}
}
