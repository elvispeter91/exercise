import { Component, Input, Output, EventEmitter } from '@angular/core';

import {cat} from './cat';

@Component({
    selector: 'cat-details',
    template: require("./cat-details.component.html")
})

export class CatDetailsComponent {
    @Input() catobj: cat;
   }
