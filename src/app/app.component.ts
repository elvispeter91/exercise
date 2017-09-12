import {Component} from "@angular/core";
import {cat} from "./cat";

/* This is the template file - component*/
/* Everything in angular is a component , its like a small MVC
* they implement three ways - dumb display component
* smart components (business) - child parent
* routing component - trying to route with high level business routing */

/* components have the tree structure like child parent */

/* nested components - can access @ViewChild like the child -parent*/

/**/

@Component ({
    selector : "herding-app" ,
    template : require("./app.component.html"),
   /*  styleUrls :  [accepts the array and has the css mapped in it ]*/
})

export class AppComponent{



   }