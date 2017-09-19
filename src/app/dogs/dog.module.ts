import {NgModule} from "@angular/core";
import {DogYearsPipe} from "./dog-years.pipe";
import {DogDetailComponent} from "./dog-detail.component";
import {FormsModule} from "@angular/forms";
import {DogsComponent} from "./dogs.component";
import {DogRoutingModule} from "./dog-routing.module";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {DogFormComponent} from "./dog-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import { HttpModule } from "@angular/http";

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, DogRoutingModule, SharedModule],
	declarations: [DogDetailComponent, DogYearsPipe, DogsComponent, DogFormComponent],
})
export class DogModule {}
