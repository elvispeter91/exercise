import {Injectable} from "@angular/core";
import {Pet} from "../shared/pet";
import { Observable } from "rxjs";

@Injectable()
export class PetService {
	boots: Pet = new Pet("cat", 1, "Boots", "Calico", "purrs like a kitten", new Date(2011, 9, 13));
	mittens: Pet = new Pet( "cat" , 2, "Mittens", "Manx", "no-tailed", new Date(2009, 4, 21));
	fuzzy: Pet = new Pet("cat" , 3, "Fuzzy", "Tabby", "Rotund", new Date(2014, 10, 10));


    tiger: Pet = new Pet("dog", 4, "tiger", "lab", "very angry", new Date(2010, 7,12));
    victor: Pet = new Pet( "dog" , 5, "victor", "Dashhunt", "always curious", new Date(2011, 9,24));
    tingu: Pet = new Pet("dog" , 6, "tingu", "pomeranian", "no -tail ", new Date(2016, 1,24 ));

    private increment: number = 7;
	private pets: Pet[] = [this.boots, this.mittens, this.fuzzy , this.tiger , this.victor , this.tingu];
	
	favouritePet: Pet;

    getPetList(type?: "cat" | "dog"): Observable<Pet> {
        if ( type ) {
            return Observable.from(this.pets)
                .filter(pet => pet.type === type);
        } else {
            return Observable.from(this.pets);
        }
    }

    getPet(id: number): Pet {
        return this.pets.find(pet => pet.id === id);
    }

    savePet(pet: Pet): any {
        let idx = this.pets.findIndex(existingPet => existingPet.id === pet.id);

        if ( idx != -1 ) {
            this.pets.splice(idx, 1, pet);
        } else {
            pet.id = this.increment++;
            this.pets.push(pet);
        }
    }

    deletePet(pet: Pet): any {
        let idx = this.pets.findIndex(existingPet => existingPet.id === pet.id);

        if ( idx != -1 ) {
            this.pets.splice(idx, 1);
        }
    }
}
