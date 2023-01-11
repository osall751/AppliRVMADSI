import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RendezVous } from '../rv';
import { faker } from '@faker-js/faker';
import { MadsiRendezVousService } from '../services/madsi-rendez-vous.service';

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
      faker.image.city()
    ),
  ];

  constructor(private routeActive: ActivatedRoute, private rvService: MadsiRendezVousService) {}

  supprimer(id: string) {
    this.tabRvs=this.rvService.supprimer(this.tabRvs, id);
  }

  ngOnInit(): void {
    this.userName = this.routeActive.snapshot.paramMap.get('email');
    this.rvService.initialiserTabRV(this.tabRvs); 
  }
}
