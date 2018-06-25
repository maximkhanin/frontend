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

    color = 'black';
    heading = '';

    changeColor() {
        this.color = 'gray';
    }
}
