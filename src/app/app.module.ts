import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {CatModule} from "./cats/cat.module";
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {BookService } from './books/book.service';

@NgModule({
	imports: [BrowserModule, CatModule, AppRoutingModule, CoreModule],
	declarations: [AppComponent],
    providers: [BookService],
	bootstrap: [AppComponent]
})
export class AppModule {}