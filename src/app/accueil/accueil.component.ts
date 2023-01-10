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
      new Date('2023/11/11')
    ),
  ];

  constructor(private routeActive: ActivatedRoute) {}

  ngOnInit(): void {
    this.userName = this.routeActive.snapshot.paramMap.get('email');
    for (let index = 0; index < 10; index++) {
      this.tabRvs[index] = new RendezVous(
        faker.datatype.uuid(),
        faker.lorem.paragraph(),
        faker.address.city(),
        faker.date.future() 
      );
    }
    console.log(this.tabRvs[7]);
  }
}
