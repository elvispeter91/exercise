import {Component} from "@angular/core";
@Component({
	selector: "herding-cats",
	template: `<h1>Herding Cats</h1>
				<nav class="navbar navbar-light bg-faded">
					<a class="navbar-brand" [routerLink]="['home']">Pets Search App</a>
					<ul class="nav navbar-nav">
						<li class="nav-item active">
							<a class="nav-link"  [routerLink]="['cats']">Cats</a>
						</li>
						<li class="nav-item">
							<a class="nav-link"  [routerLink]="['dogs']">Dogs</a>
						</li>
					</ul>
				</nav>
			   <router-outlet></router-outlet>`
})
export class AppComponent {}