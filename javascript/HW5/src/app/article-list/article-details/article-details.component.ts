import { Component, Input } from '@angular/core';

import { ArticleModel } from './article.model';
import { ActivatedRoute } from '@angular/router';

import { ArticleListService } from '../article-list.service';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
    selector: 'article-details',
    templateUrl: './article-details.component.html',
    styleUrls: ['./article-details.component.html']
})
export class ArticleDetailsComponent {
    @Input()
    article: ArticleModel;
    id: number;

    color = 'black';
    heading = '';
    private subscription: Subscription;

    changeColor() {
        this.color = 'gray';
    }

    constructor(private route: ActivatedRoute, private articleService: ArticleListService) { }

    ngOnInit() {
        this.subscription = this.route.params.pipe(
            switchMap(params => {
                this.id = params['id'];
                return this.articleService.getArticle(this.id);
            }))
            .subscribe(res => this.article = res);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
