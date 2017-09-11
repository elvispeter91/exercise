import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CatDetailsComponent} from "./cat-details.component";


@NgModule({
    imports: [BrowserModule], /* other module dependencies*/
    declarations :[AppComponent,CatDetailsComponent],
    bootstrap:[AppComponent]
    /* Module in other contexts which needs to be exports we use export:*/
    /* Providers : are the list of services available or the http services eg providers:[catService]*/
    /* bootstrap : entry point of the application */
})

export class AppModule{}