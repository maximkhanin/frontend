import { Component, Input } from '@angular/core';

import { ArticleModel } from './article.model';

@Component({
    selector: 'article-details',
    templateUrl: './article-details.component.html',
    styleUrls: ['./article-details.component.html']
})
export class ArticleDetailsComponent {
    @Input()
    article: ArticleModel;

    color = "black";
    changeColor(){
        this.color = "gray";
    }

    heading:string = "";
}
