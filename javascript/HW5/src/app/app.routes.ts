import {Route, Routes} from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-list/article-details/article-details.component';

const indexRoute: Route = {
    path: '',
    redirectTo: '/articles',
    pathMatch: 'full'
}

const fallbackRoute: Route = {
    path: '**',
    redirectTo: '/articles',
    pathMatch: 'full'
}

export const AppRoutes: Routes = [
    {
        path: 'articles',
        component: ArticleListComponent
    },
    {
        path: 'articles/:id',
        component: ArticleDetailsComponent
    },
    indexRoute,
    fallbackRoute
]