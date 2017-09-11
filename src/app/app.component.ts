import {Component} from "@angular/core";
import {cat} from "./cat";

/* Everything in angular is a component , its like a small MVC
* they implement three ways - dumb display component
* smart components (business) - child parent
* routing component - trying to route with high level business routing */

/* components have the tree structure like child parent */

/* nested components - can access @ViewChild like the child -parent*/

/**/

@Component ({
    selector : "herding-app" ,
    template : require("./app.component.html")
})

export class AppComponent{

    cat1 = new cat("kitty","Persian","White");
    cat2 = new cat("kitty2", "Canadian", "Grey");
    title = "Cats Information";

    selectedCat:cat;

    selectCat(cat: cat): any {
        this.selectedCat = cat;
    }



}