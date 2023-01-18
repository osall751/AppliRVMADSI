import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { RendezVous } from '../rv';

@Injectable({
  providedIn: 'root',
})
export class MadsiRendezVousService {
  tabRvs = [
    new RendezVous(
      faker.datatype.uuid(),
      'Rv chez le dentiste',
      'Dakar',
      new Date('2023/11/11'),
      faker.image.city()
    ),
  ];

  initialiserTabRV() {
    for (let index = 0; index < 100; index++) {
      this.tabRvs[index] = new RendezVous(
        faker.datatype.uuid(),
        faker.lorem.paragraph(),
        faker.address.city(),
        faker.date.future(),
        faker.image.city(150, 150, true)
      );
    }
    return this.tabRvs;
  }
  supprimer(id: string) {
    this.tabRvs = this.tabRvs.filter((rv: { id: string; }) => {
      return rv.id != id;
    });
    return this.tabRvs;
  }

  constructor() {}
}
