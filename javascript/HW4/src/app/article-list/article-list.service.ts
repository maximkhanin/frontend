import { ArticleModel } from './article-details/article.model';
import { BookModel } from '../books-list/book-details/book.model';

export class ArticleListService {
    articles: ArticleModel[] = [
        {
            id: 1,
            title: 'Як знімали рекламу Apple в Україні',
            shortDescription: 'Режисер кліпу Rolling in the Deep, скейтер з Іспанії та оператор на роликах з Південної Африки'
        }, {
            id: 2,
            title: 'Ipsum excepteur nisi est culpa exercitation cupidatat.',
            shortDescription: 'Minim aute et cupidatat aliqua pariatur laboris incididunt minim laboris cillum ex anim sit. Non tempor incididunt ut cillum aliquip dolor. Consectetur ipsum pariatur voluptate exercitation cillum elit labore.'
        },{
            id:3,
            title: 'Cillum do exercitation aliqua laboris aliqua aute cupidatat eiusmod mollit eiusmod Lorem aute mollit mollit.',
            shortDescription: 'Irure laborum minim est laboris officia esse dolor esse enim sint voluptate tempor exercitation. Sint veniam ad laborum occaecat consectetur ullamco voluptate aute sit deserunt cupidatat. Aute exercitation elit pariatur ea velit ex commodo duis ea nostrud non. Cillum consectetur elit in irure irure aliquip id deserunt aliquip.'
        }
    ]

    getArticles(): ArticleModel[]{
        return this.articles;
    }
}