import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { RendezVous } from '../rv';

@Injectable({
  providedIn: 'root',
})
export class MadsiRendezVousService {

  initialiserTabRV(tabRvs:any) {
    for (let index = 0; index < 100; index++) {
      tabRvs[index] = new RendezVous(
        faker.datatype.uuid(),
        faker.lorem.paragraph(),
        faker.address.city(),
        faker.date.future(),
        faker.image.city(150, 150, true)
      );
    }
  }
  supprimer(tabRvs:any, id: string) {
    tabRvs = tabRvs.filter((rv: { id: string; }) => {
      return rv.id != id;
    });
    return tabRvs;
  }

  constructor() {}
}
