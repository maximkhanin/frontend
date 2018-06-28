import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleDetailsComponent } from './article-list/article-details/article-details.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleListService } from './article-list/article-list.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app.routes';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [
		AppComponent,
		ArticleDetailsComponent,
		ArticleListComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forRoot(AppRoutes)
	],
	bootstrap: [AppComponent],
	providers: [ArticleListService]
})
export class AppModule { }
