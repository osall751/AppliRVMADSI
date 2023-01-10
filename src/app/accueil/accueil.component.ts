import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RendezVous } from '../rv';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {
  userName: string | null = '';
  nbr = 0;
  tabRvs = [
    new RendezVous(
      faker.datatype.uuid(),
      'Rv chez le dentiste',
      'Dakar',
      new Date('2023/11/11'),
      faker.image.city(), 
    ),
  ];

  constructor(private routeActive: ActivatedRoute) {}

  ngOnInit(): void {
    this.userName = this.routeActive.snapshot.paramMap.get('email');
    for (let index = 0; index < 100; index++) {
      this.tabRvs[index] = new RendezVous(
        faker.datatype.uuid(),
        faker.lorem.paragraph(),
        faker.address.city(),
        faker.date.future(),
        faker.image.city(150, 150, true), 
      );
    }
    console.log(this.tabRvs[7]);
  }
}
