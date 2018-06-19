import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './books-list/book-details/book-details.component';
import { ArticleDetailsComponent } from './article-list/article-details/article-details.component';
import { ArticleListComponent } from './article-list/article-list.component';


@NgModule({
	declarations: [
		AppComponent,
		BookDetailsComponent,
		BooksListComponent,
		ArticleDetailsComponent,
		ArticleListComponent
	],
	imports: [BrowserModule,
	FormsModule],
	bootstrap: [AppComponent]
})
export class AppModule { }
