import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ArticleModel } from './article-details/article.model';

const requestUrl = 'http://localhost:3000';

@Injectable()
export class ArticleListService {
    constructor (private http: HttpClient){ }

    getArticles(): Observable<ArticleModel[]> {
        return this.http.get<ArticleModel[]>(`${requestUrl}/articles`);
    }

    getArticle(id: number): Observable<ArticleModel>{
        return this.http.get<ArticleModel>(`${requestUrl}/articles/${id}`);
    }
}
