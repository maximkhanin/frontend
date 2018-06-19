import { Component } from '@angular/core';

import { ArticleModel } from './article-details/article.model';

@Component({
	selector: 'article-list',
	templateUrl: './article-list.component.html'
})
export class ArticleListComponent {
	articles: ArticleModel[] = [{
        id: 1,
        title: 'Як знімали рекламу Apple в Україні',
        shortDescription: 'Режисер кліпу Rolling in the Deep, скейтер з Іспанії та оператор на роликах з Південної Африки'
	},{
	id:2,
	title: 'Ipsum excepteur nisi est culpa exercitation cupidatat.',
	shortDescription:'Minim aute et cupidatat aliqua pariatur laboris incididunt minim laboris cillum ex anim sit. Non tempor incididunt ut cillum aliquip dolor. Consectetur ipsum pariatur voluptate exercitation cillum elit labore.'
	}
];
}
