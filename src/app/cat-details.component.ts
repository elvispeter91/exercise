import { Component, Input, Output, EventEmitter } from '@angular/core';

import {cat} from './cat';
import {convertValueToOutputAst} from "@angular/compiler/src/output/value_util";

@Component({
    selector: 'cat-details',
    template: require("./cat-details.component.html")
})

export class CatDetailsComponent {

    title = "Cats Information";
    cats = [ new cat("kitty","Persian","White",new Date("February 4, 2016")),
            new cat("diana", "Canadian", "Grey",new Date("January 24, 2016")),
            new cat("fluffy", "Merc", "Grey",new Date("December 14, 2016"))];

     isfound:boolean;
     catname:string;
     selectedCat:cat;

    @Input() cat: cat;
    @Output() isFavourite: EventEmitter<cat> = new EventEmitter<cat>();



    selectCat(cat1:cat) {
        this.isfound = !this.isfound;
        this.catname = cat1.name;
        this.selectedCat= cat1;
    }

    setAsFavourite(): any {
        this.isFavourite.emit(this.cat);
    }
   }
